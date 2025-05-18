// types/api.ts
export interface ApiError {
    message: string;
    status?: number;
    data?: string;
    response?: string;
  }
  
  export interface UserProfile {
    id: number;
    username: string;
    email: string;
    phone_number: string;
    first_name: string;
    last_name: string;
    is_customer: boolean;
    is_staff: boolean;
  }