import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { sliderProducts } from './sample';

// Animaciones de deslizamiento
const slideInAnimation = keyframes`
  0% { transform: translateY(-100%); opacity: 0%; }
  100% { transform: translateY(0px); opacity: 100%; }
`;

const slideLeftAnimation = keyframes`
  0% { transform: translateX(100%); opacity: 0%; }
  100% { transform: translateX(0px); opacity: 100%; }
`;

// Componentes Estilizados
const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  height: calc(100vh - 130px); // Ajuste por la suma del Navbar + Announcement
`;

const Arrow = styled.div<{ direction: string }>`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const Wrapper = styled.div<{ slideIndex: number }>`
  height: 100%;
  display: flex;
  transition: all 1.3s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div<{ bg: string }>`
  display: flex;
  width: 100vw;
  height: 100%;
  background-color: #${(props) => props.bg};
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 80%;
  object-fit: cover;
  box-shadow: 10px 40px 10px rgba(0,0,0, .25);
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${slideLeftAnimation} 1.8s;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  width: 200px;
  font-size: 20px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
  }
`;

// Componente Funcional
const Slider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderProducts.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderProducts.length - 1 ? slideIndex + 1 : 0);
    }
  };

  const navigateToShop = () => {
    navigate('/productos');
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        &lt;
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderProducts.map((item) => (
          <Slide bg={item.background} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={navigateToShop}>VER AHORA</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        &gt;
      </Arrow>
    </Container>
  );
};

export default Slider;