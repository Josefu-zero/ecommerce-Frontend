import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <IconWrapper>
        <RemoveShoppingCartOutlinedIcon style={{ fontSize: '70px', color: '#ff9100' }} />
      </IconWrapper>
      <Title>Tu carrito está vacío</Title>
      <Subtitle>
        Parece que aún no has añadido ningún producto a tu bolsa. ¡Explora nuestro catálogo tecnológico y encuentra lo que necesitas!
      </Subtitle>
      <ShopButton onClick={() => navigate('/')}>
        VOLVER AL CATÁLOGO
      </ShopButton>
    </Container>
  );
};

export default EmptyCart;

// --- ESTILOS ---
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
`;

const IconWrapper = styled.div`
  background-color: #fff3e0;
  padding: 20px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #666;
  max-width: 400px;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const ShopButton = styled.button`
  background-color: #1a237e;
  color: white;
  border: none;
  padding: 12px 30px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover { background-color: #283593; }
`;