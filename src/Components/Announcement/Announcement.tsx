import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #6bc5f2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  z-index: 2;
  position: relative;
`;

const Announcement: React.FC = () => {
  return (
    <Container>
      ¡Promo Cyber Week! ¡Compre ahora para obtener envío gratis en pedidos superiores a $100.00!
    </Container>
  );
};

export default Announcement;