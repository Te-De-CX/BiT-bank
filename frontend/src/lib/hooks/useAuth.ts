import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../lib/api/apiClient';
import { useRouter } from 'next/navigation'; // Changed from 'next/router'
import { ApiError, UserProfile } from '../types/api';
// import { jwtDecode } from 'jwt-decode';

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  password: string;
  email: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
  is_customer?: boolean;
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
    onError: (error) => {
      console.error('Login error:', error);
    }
  });
};

export const useRegister = () => {
  const router = useRouter();
  
  return useMutation<void, ApiError, RegisterData>({
    mutationFn: async (data: RegisterData) => {
      const response = await apiClient.post('/auth/register/', data);
      return response.data;
    },
    onSuccess: () => {
      router.push('/login');
    },
    onError: (error: ApiError) => {
      console.error('Registration error:', error);
      // You might want to return the error here or handle it differently
    }
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
      const response = await apiClient.get<UserProfile>(`/accounts/profile/`);
      return response.data;
    },
    retry: (failureCount, error) => {
      if (error.status === 401) return false;
      return failureCount < 3;
    },
    staleTime: 1000 * 60 * 5,
  });
};