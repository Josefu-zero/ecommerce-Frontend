import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Context as UserContext } from '../../Context/UserContext';

const Login: React.FC = () => {
  const userContext = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!userContext) return null;
  const { users, loginUser, displayModal, updateAccountTab } = userContext;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de validación con los usuarios en el Contexto
    const userFound = users.find(u => u.email === email && u.password === password);
    if (userFound) {
      loginUser(userFound);
      displayModal(false);
    } else {
      alert("Credenciales incorrectas o usuario no registrado.");
    }
  };

  return (
    <FormContainer onSubmit={handleLogin}>
      <Title>INICIAR SESIÓN</Title>
      <Input 
        type="email" 
        placeholder="Correo electrónico" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />
      <Input 
        type="password" 
        placeholder="Contraseña" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required 
      />
      <Button type="submit">INGRESAR</Button>
      <ToggleText onClick={updateAccountTab}>
        ¿No tienes cuenta? Crea una aquí
      </ToggleText>
    </FormContainer>
  );
};

export default Login;

// --- COMPONENTES ESTILIZADOS ---
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #1a237e;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #283593;
  }
`;

export const ToggleText = styled.span`
  margin-top: 15px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  color: #1a237e;
`;