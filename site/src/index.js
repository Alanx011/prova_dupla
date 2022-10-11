import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Acai from './pages/acai/index.js';
import Signos from './pages/signos/index';
import Tanque from './pages/tanque/index';
import Febre from './pages/situaçaofebre/index.js';
import Salario from './pages/salario/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Acai/>} />
        <Route path='/Signos' element={<Signos/>} />
        <Route path='/Tanque' element={<Tanque/>} />
        <Route path='/situacao' element={<Febre/>} />
        <Route path='/salario' element={<Salario/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);