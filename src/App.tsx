import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import { UserProvider } from './Context/UserContext';
import ProductProvider from './Context/ProductContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <Home />
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;