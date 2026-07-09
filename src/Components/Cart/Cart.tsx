import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context as ProductContext } from '../../Context/ProductContext';
import EmptyCart from './EmptyCart';
import CartBalance from './CartBalance';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';

const Cart: React.FC = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) return null;
  const { products, updateAmount, removeProductFromCart } = productContext;

  // Si no hay productos agregados, desplegar interfaz condicional limpia
  if (products.length === 0) {
    return <EmptyCart />;
  }

  return (
    <PageWrapper>
      <TitlePage>Tu Bolsa de Compras</TitlePage>
      <ContentContainer>
        {/* Lista de Productos agregados */}
        <ProductsList>
          {products.map((product) => (
            <ProductRow key={product.itemId}>
              <ProductImg src={product.imageUrl} alt={product.name} />
              <Details>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <PriceUnit>Precio: ${product.price.toFixed(2)}</PriceUnit>
              </Details>
              <QuantityControl>
                <QuantityButton 
                  onClick={() => product.amount > 1 ? updateAmount(product.itemId, -1) : removeProductFromCart(product.itemId)}
                >
                  -
                </QuantityButton>
                <AmountText>{product.amount}</AmountText>
                <QuantityButton onClick={() => updateAmount(product.itemId, 1)}>+</QuantityButton>
              </QuantityControl>
              <SubtotalItem>
                ${(product.price * product.amount).toFixed(2)}
              </SubtotalItem>
              <DeleteButton onClick={() => removeProductFromCart(product.itemId)}>
                <DeleteOutlineIcon />
              </DeleteButton>
            </ProductRow>
          ))}
        </ProductsList>

        {/* Caja de Balance Lateral */}
        <CartBalance />
      </ContentContainer>
    </PageWrapper>
  );
};

export default Cart;

// --- COMPONENTES ESTILIZADOS (Styled Components) ---

const PageWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 30px auto;
  padding: 0 20px;
`;

const TitlePage = styled.h2`
  font-size: 26px;
  color: #1a237e;
  margin-bottom: 25px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductsList = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ProductRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  gap: 20px;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;

const Details = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h4 {
    margin: 0;
    font-size: 16px;
    color: #333333;
  }

  p {
    margin: 0;
    font-size: 13px;
    color: #777777;
    line-height: 1.4;
  }
`;

const PriceUnit = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #1a237e;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 2px;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  
  &:hover {
    background-color: #f0f0f0;
    border-radius: 4px;
  }
`;

const AmountText = styled.span`
  font-size: 14px;
  font-weight: 500;
  min-width: 20px;
  text-align: center;
`;

const SubtotalItem = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  min-width: 8 investigador0px;
  text-align: right;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff1744;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 4px;

  &:hover {
    background-color: #ffebee;
  }
`;