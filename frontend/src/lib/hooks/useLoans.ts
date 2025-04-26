import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { Loan, LoanData, LoanPayment, LoanPaymentData, LoanStatus } from '../types/loans';
import { ApiError } from '../types/api';

export const useLoans = () => {
  return useQuery<Loan[], ApiError>({
    queryKey: ['loans'],
    queryFn: async () => {
      const response = await apiClient.get<Loan[]>('/loans/');
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useLoanDetails = (loanId: number) => {
  return useQuery<Loan, ApiError>({
    queryKey: ['loan', loanId],
    queryFn: async () => {
      const response = await apiClient.get<Loan>(`/loans/${loanId}/`);
      return response.data;
    },
    enabled: !!loanId, // Only run query if loanId exists
  });
};

export const useCreateLoan = () => {
  const queryClient = useQueryClient();
  
  return useMutation<Loan, ApiError, LoanData>({
    mutationFn: async (data) => {
      const response = await apiClient.post<Loan>('/loans/', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['loans'] });
    },
  });
};

export const useLoanPayments = (loanId: number) => {
  return useQuery<LoanPayment[], ApiError>({
    queryKey: ['loanPayments', loanId],
    queryFn: async () => {
      const response = await apiClient.get<LoanPayment[]>(`/loans/${loanId}/payments/`);
      return response.data;
    },
    enabled: !!loanId, // Only run query if loanId exists
  });
};

export const useMakeLoanPayment = (loanId: number) => {
  const queryClient = useQueryClient();
  
  return useMutation<LoanPayment, ApiError, LoanPaymentData>({
    mutationFn: async (data) => {
      const response = await apiClient.post<LoanPayment>(`/loans/${loanId}/payments/`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['loanPayments', loanId] });
      queryClient.invalidateQueries({ queryKey: ['loan', loanId] });
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    },
  });
};

export const useUpdateLoanStatus = (loanId: number) => {
  const queryClient = useQueryClient();
  
  return useMutation<Loan, ApiError, { status: LoanStatus }>({
    mutationFn: async ({ status }) => {
      const response = await apiClient.patch<Loan>(`/loans/${loanId}/`, { status });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['loan', loanId] });
      queryClient.invalidateQueries({ queryKey: ['loans'] });
    },
  });
};