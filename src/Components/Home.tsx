import React from 'react';
import Navbar from './Navbar/Navbar';
import Announcement from './Announcement/Announcement';
import Slider from './Slider/Slider';
import ProductList from './Product/ProductList'; // Lista de productos que creamos antes
import Footer from './Footer/Footer'; // <--- Importamos el Footer

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <Announcement />
      <Navbar />
      <Slider />
      <ProductList /> {/* Muestra las tarjetas de productos */}
      <Footer /> {/* <--- Se renderiza al final de la página */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh', // Garantiza que ocupe toda la pantalla
  },
};

export default Home;