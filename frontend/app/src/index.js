import React from 'react';
import { createRoot } from 'react-dom'; // Importa createRoot desde react-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/login/register';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>
);
