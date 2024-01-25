// api.ts
import axios, { AxiosInstance } from 'axios';
import { Comment, Post } from './types'; // Adjust the path

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

// Extend AxiosResponse with your custom response structure
declare module 'axios' {
  interface AxiosResponse<T = any> {
    data: T;
  }
}
