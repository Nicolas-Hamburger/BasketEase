import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>
);
