import React, { useContext } from 'react';
import styled from 'styled-components';
import { Badge, IconButton, InputBase } from '@mui/material';
import { 
  Search as SearchIcon, 
  ShoppingCart as ShoppingCartIcon, 
  AccountCircle, 
  ExitToApp 
} from '@mui/icons-material';
import { Context as UserContext } from '../../Context/UserContext';
import { Context as ProductContext } from '../../Context/ProductContext';

const Navbar: React.FC = () => {
  // Consumir los estados globales de ambos contextos
  const userContext = useContext(UserContext);
  const productContext = useContext(ProductContext);

  if (!userContext || !productContext) {
    return null;
  }

  const { logged, currentUser, logoutUser, displayModal } = userContext;
  const { products, search, itemSearch } = productContext;

  // Calcular el número total de artículos en el carrito
  const totalItemsInCart = products.reduce((total, product) => total + product.amount, 0);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    itemSearch(e.target.value);
  };

  return (
    <NavContainer>
      <LogoSection>
        <LogoText>MiE-commerce</LogoText>
      </LogoSection>

      <SearchSection>
        <SearchContainer>
          <SearchIconWrapper>
            <SearchIcon style={{ color: '#757575' }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar productos..."
            value={search}
            onChange={handleSearchChange}
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchContainer>
      </SearchSection>

      <NavItemsSection>
        {/* Sección de Carrito de Compras */}
        <IconButton aria-label="cart" style={{ color: '#ffffff', marginRight: '15px' }}>
          <Badge badgeContent={totalItemsInCart} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        {/* Sección de Autenticación de Usuario */}
        {logged ? (
          <UserMenu>
            <AccountCircle style={{ marginRight: '5px' }} />
            <UserName>Hola, {currentUser.firstName}</UserName>
            <IconButton 
              onClick={logoutUser} 
              style={{ color: '#ffffff', marginLeft: '10px' }}
              title="Cerrar Sesión"
            >
              <ExitToApp />
            </IconButton>
          </UserMenu>
        ) : (
          <LoginButton onClick={() => displayModal(true)}>
            Iniciar Sesión
          </LoginButton>
        )}
      </NavItemsSection>
    </NavContainer>
  );
};

export default Navbar;

// --- COMPONENTES ESTILIZADOS (Styled Components) ---

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a237e; /* Azul oscuro institucional */
  padding: 10px 30px;
  height: 60px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  letter-spacing: 0.5px;
`;

const SearchSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 20px;
`;

const SearchContainer = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2px 0;
`;

const SearchIconWrapper = styled.div`
  padding: 0 15px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputBase = styled(InputBase)`
  color: #333333;
  width: 100%;
  padding-left: 45px;
  padding-right: 15px;
  font-size: 15px;
`;

const NavItemsSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LoginButton = styled.button`
  background-color: #ff9100; /* Naranja llamativo */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ff6d00;
  }
`;