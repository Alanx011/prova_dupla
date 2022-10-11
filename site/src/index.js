import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Acai from './pages/acai/index.js';
import Signos from './pages/signos/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Route path='/acai' element={<Acai/>} />
    <Route path='/signos' element={<Signos/>} />
  </React.StrictMode>
);

