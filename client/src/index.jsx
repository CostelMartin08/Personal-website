import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} /> 
        <Route path='*' element={<NotFound/>} />   
      </Routes>
    </Router>
  </React.StrictMode>
);
