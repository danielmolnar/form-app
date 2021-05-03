import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) =>
    setProducts([...products, { ...product, id: uuidv4() }]);

  return (
    <Maincontainer>
      <>
        <ProductForm submitFunction={addProduct} />
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </>
    </Maincontainer>
  );
}

export default App;

const Maincontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
