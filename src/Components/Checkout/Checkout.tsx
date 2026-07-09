import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context as ProductContext } from '../../Context/ProductContext';

const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 10px 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
`;

const Total = styled.h2`
  margin-top: 20px;
  color: #1a237e;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #1a237e;
  color: white;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
`;

const Checkout: React.FC = () => {
  const productContext = useContext(ProductContext);
  
  if (!productContext) return null;
  const { products, cartTotal, removeAllProductsFromCart } = productContext;

  const handleFinish = () => {
    alert("¡Compra finalizada con éxito!");
    removeAllProductsFromCart();
  };

  return (
    <Container>
      <Title>Tu Carrito</Title>
      {products.map((item) => (
        <Item key={item.itemId}>
          <span>{item.name} (x{item.amount})</span>
          <span>${(item.price * item.amount).toFixed(2)}</span>
        </Item>
      ))}
      <Total>Total: ${cartTotal(products).toFixed(2)}</Total>
      {products.length > 0 && (
        <Button onClick={handleFinish}>FINALIZAR COMPRA</Button>
      )}
    </Container>
  );
};

export default Checkout;