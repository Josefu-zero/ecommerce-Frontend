import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Context as ProductContext } from '../../Context/ProductContext';

const CartBalance: React.FC = () => {
  const productContext = useContext(ProductContext);
  const navigate = useNavigate();

  if (!productContext) return null;
  const { products, cartTotal } = productContext;

  const subtotal = cartTotal(products);
  const envio = subtotal > 100 ? 0 : 9.99; // Envío gratis sobre $100
  const total = subtotal + envio;

  return (
    <BalanceContainer>
      <Title>RESUMEN COMPRA</Title>
      <SummaryItem>
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </SummaryItem>
      <SummaryItem>
        <span>Envío estimado</span>
        <span>{envio === 0 ? 'Gratis' : `$${envio.toFixed(2)}`}</span>
      </SummaryItem>
      <Divider />
      <SummaryItem total>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </SummaryItem>
      <CheckoutButton onClick={() => navigate('/checkout')}>
        PROCESAR PAGO
      </CheckoutButton>
    </BalanceContainer>
  );
};

export default CartBalance;

// --- ESTILOS ---
const BalanceContainer = styled.div`
  flex: 1;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 20px;
  background-color: #fafafa;
  height: fit-content;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
`;

const SummaryItem = styled.div<{ total?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: ${props => props.total ? '18px' : '15px'};
  font-weight: ${props => props.total ? 'bold' : '400'};
  color: ${props => props.total ? '#1a237e' : '#555'};
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eaeaea;
  margin: 15px 0;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background-color: #ff9100;
  color: white;
  border: none;
  padding: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;
  &:hover { background-color: #ff6d00; }
`;