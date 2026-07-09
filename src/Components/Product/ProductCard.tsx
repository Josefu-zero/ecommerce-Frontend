import React, { useContext } from 'react';
import styled from 'styled-components';
import { Product } from '../../Types/Product';
import { Context as ProductContext } from '../../Context/ProductContext';

const Card = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;
  flex-direction: column;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Button = styled.button`
  padding: 10px;
  background-color: white;
  border: 1px solid #1a237e;
  cursor: pointer;
  font-weight: 500;
  &:hover { background-color: #e8eaf6; }
`;

interface Props { item: Product }

const ProductCard: React.FC<Props> = ({ item }) => {
  const productContext = useContext(ProductContext);

  return (
    <Card>
      <Image src={item.imageUrl} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <Button onClick={() => productContext?.addProductToCart(item)}>
        Agregar al Carrito
      </Button>
    </Card>
  );
};

export default ProductCard;