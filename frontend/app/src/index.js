import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import Home from './pages/home/home'
import AdminCreateUser from './roles/admin/users/CreateUser'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<Home />} />

      <Route path="/admin/users/" element={<AdminCreateUser />} />
    </Routes>
  </Router>
);
