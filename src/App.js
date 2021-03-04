import ProductForm from './components/ProductForm';
import styled from 'styled-components';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) =>
    setProducts([...products, { ...product, id: uuidv4() }]);

  return (
    <Maincontainer>
      <>
        <h1>Add a product</h1>
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

// const ProductcardWrapper = styled.div`
//   background-image: url(${wallpaper});
//   background-size: contain;
// `;
