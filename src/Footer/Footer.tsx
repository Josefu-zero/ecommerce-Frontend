import React from 'react';
import styled from 'styled-components';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Room, 
  Phone, 
  MailOutline 
} from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Container>
      {/* Sección Izquierda */}
      <Left>
        <Logo>MiE-commerce</Logo>
        <Desc>
          Tu tienda tecnológica de confianza. Ofrecemos los mejores componentes de hardware, 
          periféricos y equipos armados con garantía total y envíos a todo el país.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>

      {/* Sección Central */}
      <Center>
        <Title>Enlaces Útiles</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Computadoras</ListItem>
          <ListItem>Hardware</ListItem>
          <ListItem>Mi Cuenta</ListItem>
          <ListItem>Seguimiento de Pedidos</ListItem>
          <ListItem>Términos y Condiciones</ListItem>
        </List>
      </Center>

      {/* Sección Derecha */}
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Av. Amazonas y Patria, Quito, Ecuador
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +593 99 999 9999
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> soporte@myecommerce.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Métodos de pago" />
      </Right>
    </Container>
  );
};

export default Footer;

// --- COMPONENTES ESTILIZADOS (Styled Components) ---

const Container = styled.footer`
  display: flex;
  background-color: #fafafa;
  color: #333;
  padding: 40px 20px;
  border-top: 1px solid #eaeaea;
  margin-top: auto; /* Empuja el footer al final si el contenido es corto */
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1a237e;
`;

const Desc = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
  font-size: 14px;
  color: #555;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 768px) {
    display: none; /* Ocultar en móviles para ahorrar espacio */
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
  color: #555;
  &:hover {
    color: #1a237e;
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
`;

const Payment = styled.img`
  width: 50%;
  margin-top: 10px;
`;