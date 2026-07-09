import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// 1. Importación de Proveedores de Contexto (Estado Global)
import { UserProvider } from './Context/UserContext';
import ProductProvider from './Context/ProductContext';

// 2. Importación de Componentes de Layout Global
import Announcement from './Components/Announcement/Announcement';
import Navbar from './Components/Navbar/Navbar';
import Modal from './Components/LoginRegister/Modal';
import Footer from './Components/Footer/Footer';

// 3. Importación de Vistas / Páginas Principales
import Home from './Components/Home';
import Checkout from './Components/Checkout/Checkout';
import UserProfile from './Components/UserProfile/UserProfile';

import Cart from './Components/Cart/Cart'; // <--- Importas el Carrito

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        {/* El Modal flota sobre toda la aplicación esperando ser activado */}
        <Modal /> 
        
        <AppContainer>
          {/* Cabecera fija para todas las pantallas */}
          <Announcement />
          <Navbar />

          {/* Área de Contenido Dinámico manejada por React Router */}
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} /> {/* <--- Nueva ruta enlazada */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/perfil" element={<UserProfile />} />
              <Route path="/perfil" element={<UserProfile />} />
            </Routes>
          </MainContent>

          {/* Pie de página global */}
          <Footer />
        </AppContainer>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;

// --- COMPONENTES ESTILIZADOS (Styled Components) ---

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenedor ocupe toda la pantalla */
  background-color: #fcfcfc;
`;

const MainContent = styled.main`
  flex: 1; /* Empuja el Footer hacia abajo si hay poco contenido */
  display: flex;
  flex-direction: column;
  width: 100%;
`;