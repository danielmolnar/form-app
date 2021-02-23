import './App.css';
import ProductForm from './ProductForm';
import styled from 'styled-components';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from './ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) =>
    setProducts([...products, { ...product, id: uuidv4() }]);

  return (
    <div className="App">
      <ProductForm submitFunction={addProduct} />
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default App;
