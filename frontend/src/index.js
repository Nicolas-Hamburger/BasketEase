import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Header from './components/header/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <App />
  </>
);
