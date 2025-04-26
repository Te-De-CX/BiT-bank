import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../lib/api/apiClient';
import { useRouter } from 'next/router';
import { ApiError, UserProfile } from '../types/api';

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  password: string;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  is_customer: boolean;
}

interface LoginResponse {
  access: string;
  refresh: string;
}

export const useLogin = () => {
  const router = useRouter();
  
  return useMutation<LoginResponse, ApiError, LoginData>({
    mutationFn: async (data) => {
      const response = await apiClient.post<LoginResponse>('/auth/login/', data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      router.push('/dashboard');
    },
  });
};

export const useRegister = () => {
  const router = useRouter();
  
  return useMutation<void, ApiError, RegisterData>({
    mutationFn: async (data) => {
      await apiClient.post('/auth/register/', data);
    },
    onSuccess: () => {
      router.push('/login');
    },
  });
};

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  return () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    queryClient.clear();
    router.push('/login');
  };
};

export const useUserProfile = () => {
  return useQuery<UserProfile, ApiError>({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const response = await apiClient.get<UserProfile>('/accounts/profile/');
      return response.data;
    },
    retry: (failureCount, error) => {
      // Don't retry on 401 errors
      if (error.status === 401) return false;
      return failureCount < 3;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};