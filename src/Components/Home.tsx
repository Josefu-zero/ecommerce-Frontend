import React from 'react';
import Slider from './Slider/Slider';
import ProductList from './Product/ProductList';

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <ProductList />
    </>
  );
};

export default Home;