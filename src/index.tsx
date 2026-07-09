import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <--- 1. Importa esto
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* 2. Envuelve el componente App completo aquí */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
