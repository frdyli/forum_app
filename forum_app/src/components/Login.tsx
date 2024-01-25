// src/components/Login.tsx
import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { loginUser } from '../services/userService';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      const userData = await loginUser(username, password);
      login(userData);
      // Redirect to the forum page after login (you may use useHistory for this)
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
