import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { Card, CardsResponse, CardData, UpdateCardStatusData } from '../types/cards';
import { ApiError } from '../types/api';

export const useCards = () => {
  return useQuery<CardsResponse, ApiError>({
    queryKey: ['cards'],
    queryFn: async () => {
      const response = await apiClient.get<CardsResponse>('/cards/');
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCardDetails = (cardId: number) => {
  return useQuery<Card, ApiError>({
    queryKey: ['card', cardId],
    queryFn: async () => {
      const response = await apiClient.get<Card>(`/cards/${cardId}/`);
      return response.data;
    },
    enabled: !!cardId, // Only run query if cardId exists
  });
};

export const useCreateCard = () => {
  return useMutation<Card, ApiError, CardData>({
    mutationFn: async (cardData) => {
      const response = await apiClient.post('/cards/', {
        account: cardData.account.toString(), // Ensure account is sent as string
        card_type: cardData.card_type
      });
      return response.data;
    }
  });
};

export const useUpdateCardStatus = (cardId: number) => {
  const queryClient = useQueryClient();
  
  return useMutation<Card, ApiError, UpdateCardStatusData>({
    mutationFn: async (data) => {
      const response = await apiClient.patch<Card>(`/cards/${cardId}/`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['card', cardId] });
      queryClient.invalidateQueries({ queryKey: ['cards'] });
    },
  });
};

export const useDeleteCard = () => {
  const queryClient = useQueryClient();
  
  return useMutation<void, ApiError, number>({
    mutationFn: async (cardId) => {
      await apiClient.delete(`/cards/${cardId}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cards'] });
    },
  });
};