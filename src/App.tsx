import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Importación de Contextos
import { UserProvider } from './Context/UserContext';
import ProductProvider from './Context/ProductContext';

// Importación de Componentes Globales e Inicio
import Announcement from './Components/Announcement/Announcement';
import Navbar from './Components/Navbar/Navbar';
import Modal from './Components/LoginRegister/Modal';
import Home from './Components/Home';

// Importación de las nuevas Vistas (Páginas)
import Checkout from './Components/Checkout/Checkout';
import UserProfile from './Components/UserProfile/UserProfile';

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        {/* El Modal flota globalmente esperando que userContext.modal sea true */}
        <Modal /> 
        
        <AppContainer>
          {/* Secciones fijas superiores */}
          <Announcement />
          <Navbar />

          {/* Área de contenido dinámico manejada por el Enrutador */}
          <MainContent>
            <Routes>
              {/* Ruta Principal: Muestra el Slider y la lista de productos */}
              <Route path="/" element={<Home />} />
              
              {/* Ruta del Carrito / Pasarela de pago */}
              <Route path="/checkout" element={<Checkout />} />
              
              {/* Ruta del Perfil de usuario (Datos personales e Historial) */}
              <Route path="/perfil" element={<UserProfile />} />
            </Routes>
          </MainContent>
        </AppContainer>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;

// --- COMPONENTES ESTILIZADOS PARA EL LAYOUT GLOBAL ---

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fcfcfc;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;