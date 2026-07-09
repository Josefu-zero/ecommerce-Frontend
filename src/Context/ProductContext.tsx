import React, { useState, useEffect } from 'react';
import { Product, ProductContextState } from '../Types/Product';


interface ProviderProps {
  children: React.ReactNode;
}

export const Context = React.createContext<ProductContextState | null>(null);

const ProductProvider: React.FC<ProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartNumber, setCartNumber] = useState<number>(0);
  const [search, setSearch] = useState<string>('');

  // SIMULACIÓN DE BD: Cargamos productos iniciales al montar la aplicación
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        itemId: 101,
        name: "PC Gamer Setup Ultimate",
        imageUrl: "https://i.pinimg.com/originals/61/7e/bd/617ebdd4218091ba86faa2924b412c2c.jpg",
        description: "Procesador de última generación, 32GB RAM, RTX 4070.",
        price: 1250.00,
        amount: 1 // Cantidad inicial por defecto al añadir
      },
      {
        itemId: 102,
        name: "Sistema de Enfriamiento Líquido",
        imageUrl: "https://acf.geeknetic.es/img/imagenes/Tutoriales/2020/1724-corsair-hydro-x-49.jpg",
        description: "Radiador triple, ventiladores RGB silenciosos de alto flujo.",
        price: 180.00,
        amount: 1
      },
      {
        itemId: 103,
        name: "Teclado Mecánico Custom RGB",
        imageUrl: "https://c8.alamy.com/compes/2bmmbgd/teclas-de-teclado-de-ordenador-de-primer-plano-con-efecto-bokeh-prof.jpg",
        description: "Switches mecánicos premium, keycaps PBT de alta duración.",
        price: 95.00,
        amount: 1
      }
    ];
    setProducts(mockProducts);
  }, []);

  const addProductToCart = (product: Product) => {
    const addedProduct: Product = {
      itemId: product.itemId,
      imageUrl: product.imageUrl,
      name: product.name,
      description: product.description,
      price: product.price,
      amount: product.amount,
    };

    let addProduct: boolean = true;
    for (let i: number = 0; i < products.length; i++) {
      if (products[i].itemId === addedProduct.itemId) {
        products[i].amount++;
        addProduct = false;
      }
    }

    if (addProduct) {
      setProducts([...products, addedProduct]);
    }
  };

  const removeProductFromCart = (productId: number) => {
    setProducts(products.filter((product: Product) => product.itemId !== productId));
  };

  const removeAllProductsFromCart = () => {
    setProducts([]);
  };

  const itemsInCart = (n: number): number => {
    setCartNumber(cartNumber + n);
    return cartNumber;
  };

  const updateAmount = (productId: number, n: number) => {
    for (let i: number = 0; i < products.length; i++) {
      if (productId === products[i].itemId) {
        products[i].amount = products[i].amount + n;
      }
    }
  };

  const cartTotal = (products: Product[]): number => {
    let total: number = 0;
    for (let i: number = 0; i < products.length; i++) {
      total += products[i].price * products[i].amount;
    }
    return total;
  };

  const itemSearch = (e: string) => {
    if (e) {
      setSearch(e);
    }
  };

  return (
    <Context.Provider value={{
      products,
      addProductToCart,
      removeProductFromCart,
      itemsInCart,
      cartTotal,
      cartNumber,
      updateAmount,
      itemSearch,
      search,
      removeAllProductsFromCart
    }}>
      {children}
    </Context.Provider>
  );
};

export default ProductProvider;