import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Context as UserContext } from '../../Context/UserContext';
import AccountDetails from '../AccountDetails/AccountDetails';
import NoPastOrder from '../NoPastOrder/NoPastOrder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const UserProfile: React.FC = () => {
  const userContext = useContext(UserContext);
  const [activeTab, setActiveTab] = useState<'details' | 'orders'>('details');

  if (!userContext) return null;
  const { currentUser, logged } = userContext;

  // Si por alguna razón el usuario intenta acceder sin estar logueado
  if (!logged) {
    return (
      <AccessDenied>
        <h2>Acceso Denegado</h2>
        <p>Por favor, inicia sesión para ver los detalles de tu cuenta.</p>
      </AccessDenied>
    );
  }

  return (
    <ProfileContainer>
      {/* Barra Lateral de Navegación del Perfil */}
      <Sidebar>
        <UserGreeting>
          <AvatarWrapper>
            {currentUser.firstName.charAt(0).toUpperCase()}
          </AvatarWrapper>
          <GreetingText>
            <span>Hola,</span>
            <h4>{currentUser.firstName} {currentUser.lastName}</h4>
          </GreetingText>
        </UserGreeting>

        <TabMenu>
          <TabButton 
            active={activeTab === 'details'} 
            onClick={() => setActiveTab('details')}
          >
            <PersonIcon style={{ marginRight: '10px', fontSize: '20px' }} />
            Mis Datos
          </TabButton>
          <TabButton 
            active={activeTab === 'orders'} 
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingBagIcon style={{ marginRight: '10px', fontSize: '20px' }} />
            Mis Pedidos
          </TabButton>
        </TabMenu>
      </Sidebar>

      {/* Contenedor del Contenido Dinámico */}
      <ContentArea>
        {activeTab === 'details' ? (
          <AccountDetails />
        ) : (
          /* Aquí simula historial vacío; en una fase posterior se mapeará con compras reales */
          <NoPastOrder />
        )}
      </ContentArea>
    </ProfileContainer>
  );
};

export default UserProfile;

// --- COMPONENTES ESTILIZADOS (Styled Components) ---

const ProfileContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 30px auto;
  padding: 0 20px;
  gap: 30px;
  min-height: 70vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 20px;
  height: fit-content;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;

const UserGreeting = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 20px;
`;

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1a237e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const GreetingText = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 13px;
    color: #777;
  }
  h4 {
    margin: 0;
    font-size: 16px;
    color: #333;
  }
`;

const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TabButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 15px;
  border: none;
  background-color: ${props => props.active ? '#e8eaf6' : 'transparent'};
  color: ${props => props.active ? '#1a237e' : '#555555'};
  font-weight: ${props => props.active ? 'bold' : '500'};
  text-align: left;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    color: #1a237e;
  }
`;

const ContentArea = styled.div`
  flex: 3;
  background-color: #ffffff;
`;

const AccessDenied = styled.div`
  text-align: center;
  padding: 100px 20px;
  h2 { color: #d32f2f; margin-bottom: 10px; }
  p { color: #555; }
`;