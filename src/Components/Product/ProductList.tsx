import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context as ProductContext } from '../../Context/ProductContext';
import ProductCard from './ProductCard'; 

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList: React.FC = () => {
  const productContext = useContext(ProductContext);
  if (!productContext) return null;

  const { products, search } = productContext;

  return (
    <Container>
      {products
        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        .map((item) => (
          <ProductCard key={item.itemId} item={item} />
        ))}
    </Container>
  );
};

export default ProductList;