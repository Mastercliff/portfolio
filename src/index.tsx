import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/MainPage';
import './index.css'

const doc = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(doc);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);