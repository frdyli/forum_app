// src/App.tsx

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ForumPage from './components/ForumPage/ForumPage';
import Home from './components/Home'; 
import UserForm from './components/UserForm'; 

const About: React.FC = () => <h1>About Page</h1>;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/forum" element={<ForumPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

