import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context as UserContext } from '../../Context/UserContext';
import Login from './Login';
import Register from './Register';

const Modal: React.FC = () => {
  const userContext = useContext(UserContext);

  if (!userContext || !userContext.modal) {
    return null; // Si el modal está cerrado, no renderiza nada
  }

  const { currentTab, displayModal } = userContext;

  return (
    <BackgroundOverlay onClick={() => displayModal(false)}>
      {/* Detenemos la propagación del clic para no cerrar al tocar el formulario */}
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => displayModal(false)}>X</CloseButton>
        {currentTab === '1' ? <Login /> : <Register />}
      </ModalWrapper>
    </BackgroundOverlay>
  );
};

export default Modal;

// --- COMPONENTES ESTILIZADOS ---
const BackgroundOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding: 40px;
  width: 400px;
  max-width: 90%;
  border-radius: 10px;
  position: relative;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  &:hover {
    color: red;
  }
`;