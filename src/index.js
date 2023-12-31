import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App  from './pages/App';
import Location from './pages/location';


import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/location' element={<Location />}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

