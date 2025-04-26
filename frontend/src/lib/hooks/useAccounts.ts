import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { Account, AccountData, Beneficiary, BeneficiaryData } from '../types/accounts';
import { ApiError } from '../types/api';

export const useAccounts = () => {
  return useQuery<Account[], ApiError>({
    queryKey: ['accounts'],
    queryFn: async () => {
      const response = await apiClient.get<Account[]>('/accounts/accounts/');
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useAccountDetails = (accountId: number) => {
  return useQuery<Account, ApiError>({
    queryKey: ['account', accountId],
    queryFn: async () => {
      const response = await apiClient.get<Account>(`/accounts/accounts/${accountId}/`);
      return response.data;
    },
    enabled: !!accountId, // Only run query if accountId exists
  });
};

export const useCreateAccount = () => {
  const queryClient = useQueryClient();
  
  return useMutation<Account, ApiError, AccountData>({
    mutationFn: async (data) => {
      const response = await apiClient.post<Account>('/accounts/accounts/', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    },
  });
};

export const useBeneficiaries = () => {
  return useQuery<Beneficiary[], ApiError>({
    queryKey: ['beneficiaries'],
    queryFn: async () => {
      const response = await apiClient.get<Beneficiary[]>('/accounts/beneficiaries/');
      return response.data;
    },
  });
};

export const useAddBeneficiary = () => {
  const queryClient = useQueryClient();
  
  return useMutation<Beneficiary, ApiError, BeneficiaryData>({
    mutationFn: async (data) => {
      const response = await apiClient.post<Beneficiary>('/accounts/beneficiaries/', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['beneficiaries'] });
    },
  });
};

export const useRemoveBeneficiary = () => {
  const queryClient = useQueryClient();
  
  return useMutation<void, ApiError, number>({
    mutationFn: async (beneficiaryId) => {
      await apiClient.delete(`/accounts/beneficiaries/${beneficiaryId}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['beneficiaries'] });
    },
  });
};