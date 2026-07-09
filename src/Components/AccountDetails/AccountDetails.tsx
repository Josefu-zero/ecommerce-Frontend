import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context as UserContext } from '../../Context/UserContext';

const AccountDetails: React.FC = () => {
  const userContext = useContext(UserContext);

  // Estados locales para manejar los campos del formulario
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const currentUser = userContext?.currentUser;
  const updateCurrentUser = userContext?.updateCurrentUser;

  // Cargar los datos del usuario actual cuando el componente se monte
  useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
      setEmail(currentUser.email);
      setPhoneNumber(currentUser.phoneNumber);
      setAddress(currentUser.address);
    }
  }, [currentUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentUser || !updateCurrentUser) {
      return;
    }

    // Creamos el objeto actualizado manteniendo el ID y password anteriores
    const updatedUser = {
      ...currentUser,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
    };

    // Actualizamos el estado global en el contexto
    updateCurrentUser(updatedUser);
    alert('¡Información de la cuenta actualizada con éxito!');
  };

  if (!userContext) return null;

  return (
    <Container>
      <Title>Detalles de la Cuenta</Title>
      <Form onSubmit={handleSubmit}>
        <Row>
          <InputGroup>
            <Label>Nombre</Label>
            <Input 
              type="text" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              required 
            />
          </InputGroup>
          <InputGroup>
            <Label>Apellido</Label>
            <Input 
              type="text" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              required 
            />
          </InputGroup>
        </Row>

        <InputGroup>
          <Label>Correo Electrónico</Label>
          <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </InputGroup>

        <InputGroup>
          <Label>Teléfono / Celular</Label>
          <Input 
            type="text" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </InputGroup>

        <InputGroup>
          <Label>Dirección de Envío</Label>
          <Input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </InputGroup>

        <SubmitButton type="submit">GUARDAR CAMBIOS</SubmitButton>
      </Form>
    </Container>
  );
};

export default AccountDetails;

// --- COMPONENTES ESTILIZADOS (Styled Components) ---

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  color: #1a237e;
  margin-bottom: 25px;
  font-weight: 600;
  border-bottom: 2px solid #e8eaf6;
  padding-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #555555;
`;

const Input = styled.input`
  padding: 10px 14px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #1a237e;
  }
`;

const SubmitButton = styled.button`
  background-color: #1a237e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #283593;
  }
`;