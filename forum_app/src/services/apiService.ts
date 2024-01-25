// apiService.ts

import axios, { AxiosResponse } from 'axios';
import { UserData } from '../../UserData';

const baseURL = 'http://localhost:5000/api'; // Replace with your backend API URL

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

export const registerUser = async (userData: UserData) => {
    await axios.post(`http://localhost:5000/api/register`, userData);
  };
  
export const loginUser = async (userData: UserData) => {
    const response = await axios.post(`http://localhost:5000/api/login`, userData);
    const token = response.data.token;
    // Store the token securely, e.g., in local storage or a secure cookie
    localStorage.setItem('authToken', token);
  };

interface AuthResponse {
    token: string;
  }
  
  
  export const setAuthHeader = (token: string): void => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };
  
  export const clearAuthHeader = (): void => {
    delete api.defaults.headers.common['Authorization'];
  };