import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const NoPastOrder: React.FC = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/'); // Redirige a la página principal donde están los productos
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <IconWrapper>
        <ShoppingBagOutlinedIcon style={{ fontSize: '80px', color: '#9e9e9e' }} />
      </IconWrapper>
      <Title>No tienes pedidos anteriores</Title>
      <Subtitle>
        Parece que aún no has realizado ninguna compra en nuestra tienda. 
        ¡Explora nuestro catálogo y encuentra los mejores componentes tecnológicos!
      </Subtitle>
      <ShopButton onClick={handleStartShopping}>
        IR A LA TIENDA
      </ShopButton>
    </Container>
  );
};

export default NoPastOrder;

// --- COMPONENTES ESTILIZADOS (Styled Components) ---

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  max-width: 500px;
  margin: 30px auto;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #333333;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
  margin: 0 0 25px 0;
  max-width: 85%;
`;

const ShopButton = styled.button`
  background-color: #1a237e; /* Azul institucional */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 30px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(26, 35, 126, 0.2);
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #283593;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;