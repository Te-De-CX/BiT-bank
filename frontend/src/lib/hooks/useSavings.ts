import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import {
  SavingsAccount,
  Reward,
  UserReward,
  Competition,
  CompetitionParticipant,
  InterestCalculation,
  SavingsAccountType
} from '../types/savings';
import { ApiError } from '../types/api';

// Savings Accounts
export const useSavingsAccounts = () => {
  return useQuery<SavingsAccount[], ApiError>({
    queryKey: ['savingsAccounts'],
    queryFn: async () => {
      const response = await apiClient.get<SavingsAccount[]>('/api/savings/savings-accounts/');
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCreateSavingsAccount = () => {
  const queryClient = useQueryClient();
  
  return useMutation<SavingsAccount, ApiError, {
    account_id: number;
    account_type: SavingsAccountType;
    interest_rate: number;
  }>({
    mutationFn: async (data) => {
      const response = await apiClient.post<SavingsAccount>('/api/savings/savings-accounts/', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['savingsAccounts'] });
    },
  });
};

// Rewards
export const useRewardsCatalog = () => {
  return useQuery<Reward[], ApiError>({
    queryKey: ['rewards'],
    queryFn: async () => {
      const response = await apiClient.get<Reward[]>('/api/savings/rewards/');
      return response.data;
    },
  });
};

export const useUserRewards = () => {
  return useQuery<UserReward[], ApiError>({
    queryKey: ['userRewards'],
    queryFn: async () => {
      const response = await apiClient.get<UserReward[]>('/api/savings/user-rewards/');
      return response.data;
    },
  });
};

export const useRedeemReward = () => {
  const queryClient = useQueryClient();
  
  return useMutation<{ success: boolean }, ApiError, {
    reward_id: number;
    points_to_redeem: number;
  }>({
    mutationFn: async (data) => {
      const response = await apiClient.post<{ success: boolean }>(
        '/api/savings/rewards/redeem/',
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userRewards'] });
    },
  });
};

// Competitions
export const useActiveCompetitions = () => {
  return useQuery<Competition[], ApiError>({
    queryKey: ['competitions'],
    queryFn: async () => {
      const response = await apiClient.get<Competition[]>('/api/savings/competitions/');
      return response.data.filter(comp => 
        new Date(comp.start_date) <= new Date() && 
        new Date(comp.end_date) >= new Date()
      );
    },
  });
};

export const useJoinCompetition = () => {
  const queryClient = useQueryClient();
  
  return useMutation<CompetitionParticipant, ApiError, {
    competition_id: number;
    savings_account_id: number;
  }>({
    mutationFn: async (data) => {
      const response = await apiClient.post<CompetitionParticipant>(
        '/api/savings/competitions/join/',
        data
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['competitions'] });
      queryClient.invalidateQueries({ queryKey: ['savingsAccounts'] });
    },
  });
};

// Interest Calculation
export const useCalculateInterest = (accountId: number) => {
  return useQuery<InterestCalculation, ApiError>({
    queryKey: ['interestCalculation', accountId],
    queryFn: async () => {
      const response = await apiClient.get<InterestCalculation>(
        `/api/savings/savings-accounts/${accountId}/calculate-interest/`
      );
      return response.data;
    },
    enabled: !!accountId,
  });
};