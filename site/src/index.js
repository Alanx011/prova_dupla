import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Acai from './pages/acai/index.js';
import Signos from './pages/signos/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Acai/>} />
        <Route path='/Signos' element={<Signos/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);