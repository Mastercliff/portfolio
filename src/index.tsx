import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import MainPage from './pages/MainPage';

const doc = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(doc);

root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);