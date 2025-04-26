import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { Transaction, TransactionResponse, TransferData } from '../types/transactions';
import { ApiError } from '../types/api';

export const useAccountTransactions = (accountId: number) => {
  return useQuery<Transaction[], ApiError>({
    queryKey: ['transactions', accountId],
    queryFn: async () => {
      const response = await apiClient.get<Transaction[]>(`/transactions/accounts/${accountId}/transactions/`);
      return response.data;
    },
    enabled: !!accountId, // Only run query if accountId exists
    staleTime: 1000 * 60, // 1 minute stale time for transactions
  });
};

export const useTransactionDetails = (transactionId: number) => {
  return useQuery<Transaction, ApiError>({
    queryKey: ['transaction', transactionId],
    queryFn: async () => {
      const response = await apiClient.get<Transaction>(`/transactions/transactions/${transactionId}/`);
      return response.data;
    },
    enabled: !!transactionId, // Only run query if transactionId exists
  });
};

export const useTransfer = () => {
  const queryClient = useQueryClient();
  
  return useMutation<TransactionResponse, ApiError, TransferData>({
    mutationFn: async (data) => {
      const response = await apiClient.post<TransactionResponse>('/transactions/transfer/', data);
      return response.data;
    },
    onSuccess: (_, variables) => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      queryClient.invalidateQueries({ queryKey: ['transactions', variables.from_account] });
      queryClient.invalidateQueries({ queryKey: ['transactions', variables.to_account] });
    },
  });
};

export const useRecentTransactions = (limit = 5) => {
  return useQuery<Transaction[], ApiError>({
    queryKey: ['recentTransactions', limit],
    queryFn: async () => {
      const response = await apiClient.get<Transaction[]>(`/transactions/recent/?limit=${limit}`);
      return response.data;
    },
    staleTime: 1000 * 30, // 30 seconds stale time for recent transactions
  });
};