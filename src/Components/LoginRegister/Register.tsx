import React, { useState, useContext } from 'react';
import { Context as UserContext } from '../../Context/UserContext';
import { FormContainer, Title, Input, Button, ToggleText } from './Login'; // Reutilizamos estilos

const Register: React.FC = () => {
  const userContext = useContext(UserContext);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: ''
  });

  if (!userContext) return null;
  const { addUser, updateAccountTab } = userContext;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Guardamos el usuario con ID 0 temporalmente, el Contexto le asignará uno aleatorio
    addUser({ ...formData, userId: 0 });
    alert("Usuario registrado con éxito. Ahora inicia sesión.");
    updateAccountTab(); // Cambiamos a la pestaña de Login
  };

  return (
    <FormContainer onSubmit={handleRegister}>
      <Title>CREAR UNA CUENTA</Title>
      <Input name="firstName" placeholder="Nombre" onChange={handleChange} required />
      <Input name="lastName" placeholder="Apellido" onChange={handleChange} required />
      <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <Input name="phoneNumber" placeholder="Teléfono" onChange={handleChange} required />
      <Input name="address" placeholder="Dirección" onChange={handleChange} required />
      <Input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
      
      <Button type="submit">REGISTRARSE</Button>
      <ToggleText onClick={updateAccountTab}>
        ¿Ya tienes cuenta? Inicia sesión
      </ToggleText>
    </FormContainer>
  );
};

export default Register;