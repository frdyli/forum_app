import axios from 'axios';

const API_URL = 'http://localhost:5000/users'; // Update with your Rails server URL

export const loginUser = async (username: string, password: string) => {
  const response = await axios.post(`http://localhost:5000/users/login`, { username, password });
  return response.data;
};

export const signupUser = async (username: string, password: string) => {
  const response = await axios.post(`http://localhost:5000/users/signup`, { username, password });
  return response.data;
};