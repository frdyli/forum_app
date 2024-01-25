// UserForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('/api/auth/register', { username, password });
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleLogin = async () => {
    try {
      await axios.post('/api/auth/login', { username, password });
      console.log('Login successful!');
      // Redirect to the forum page after successful login
      navigate('/forum');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Welcome</h2>
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
      <button onClick={handleRegister} className="btn btn-primary">
        Register
      </button>
      <button onClick={handleLogin} className="btn btn-primary ms-2">
        Login
      </button>
    </div>
  );
};

export default UserForm;

