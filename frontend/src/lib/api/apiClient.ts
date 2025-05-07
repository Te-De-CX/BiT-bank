// lib/api/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api',
  withCredentials: true,  // Important for CORS with credentials
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add response interceptor for consistent error handling
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      return Promise.reject({
        message: error.response.data?.message || 'An error occurred',
        status: error.response.status,
        data: error.response.data
      });
    } else if (error.request) {
      // The request was made but no response was received
      return Promise.reject({
        message: 'No response received from server',
        status: null
      });
    } else {
      // Something happened in setting up the request
      return Promise.reject({
        message: error.message,
        status: null
      });
    }
  }
);

export default apiClient;