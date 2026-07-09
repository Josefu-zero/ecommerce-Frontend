import React from 'react';
import Navbar from './Navbar/Navbar';
import Announcement from './Announcement/Announcement';
import Slider from './Slider/Slider';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <Announcement />
      <Navbar />
      <Slider />
      {/* Las demás secciones como la cuadrícula de productos irán debajo */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const, // Forzar apilamiento vertical
    minHeight: '100vh',
  },
};

export default Home;