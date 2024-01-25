// src/components/UserForm.tsx
import React, { useState } from 'react';
import { loginUser, signupUser } from '../services/userService';
import { useAuth } from '../context/authContext';

const UserForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await loginUser(username, password);
      login(userData);
      console.log('User logged in successfully!');
      // Add logic to redirect or show success message
    } catch (error) {
      console.error('Error logging in:', error);
      // Add logic to handle error, show error message, etc.
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await signupUser(username, password);
      login(userData);
      console.log('User created and logged in successfully!');
      // Add logic to redirect or show success message
    } catch (error) {
      console.error('Error creating user or logging in:', error);
      // Add logic to handle error, show error message, etc.
    }
  };

  return (
    <div>
      <h2>Login or Sign Up</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default UserForm;

