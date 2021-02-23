import React, { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import wallpaper from './wallpaper.svg';

export default function ProductForm({ submitFunction }) {
  const initialProduct = {
    name: '',
    price: '',
    currency: '',
    category: '',
    size: '',
    supportContact: '',
    tags: [],
    onSale: false,
  };

  const [product, setProduct] = useState(initialProduct);

  const handleChange = (event) => {
    const field = event.target;
    let value = event.target.value;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setProduct({
      ...product,
      [field.name]: value,
    });
  };

  const addProductTag = (tag) => {
    setProduct({
      ...product,
      tags: [...product.tags, tag],
    });
  };

  function submitForm(event) {
    event.preventDefault();
    console.log(product);
    submitFunction(product);
    setProduct(initialProduct);
  }

  return (
    <WrapContainer>
      <MainContainer>
        <form onSubmit={submitForm}>
          <Headerstyle>New Product</Headerstyle>
          <CardContainer>
            <LabelStyler>
              Product Name <br />
              <br />
              <InputStyler
                type="text"
                name="name"
                onChange={handleChange}
                value={product.name}
              />
            </LabelStyler>
            <NumberContainer>
              <label>
                Price <br />
                <br />
                <input
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                />
              </label>
              <label>
                Currency <br />
                <br />
                <input
                  type="text"
                  name="currency"
                  value={product.currency}
                  onChange={handleChange}
                />
              </label>
            </NumberContainer>
            <LabelStyler>
              Category <br />
              <br />
              <Categorystyle
                name="category"
                value={product.category}
                onChange={handleChange}
                placeholder="Select a Category"
              >
                <option value="Graphics Cards">Graphics Cards</option>
                <option value="CPU">CPU</option>
                <option value="Memory">Memory</option>
              </Categorystyle>
            </LabelStyler>
            <LabelStyler>
              Package Size <br />
              <br />
              <Radiocontainer>
                <input
                  type="radio"
                  value="small"
                  name="size"
                  onChange={handleChange}
                  checked={product.size === 'small'}
                />{' '}
                S
                <input
                  type="radio"
                  value="medium"
                  name="size"
                  onChange={handleChange}
                  checked={product.size === 'medium'}
                />{' '}
                M
                <input
                  type="radio"
                  value="large"
                  name="size"
                  onChange={handleChange}
                  checked={product.size === 'large'}
                />{' '}
                L
              </Radiocontainer>
            </LabelStyler>
            <LabelStyler>
              Support Contact (email) <br />
              <br />
              <InputStyler
                type="text"
                name="supportContact"
                onChange={handleChange}
                value={product.supportContact}
              />
            </LabelStyler>

            <Tag onCreateTag={addProductTag} tags={product.tags} />

            <label>
              <input
                type="checkbox"
                name="onSale"
                value={1}
                onChange={handleChange}
                checked={product.onSale}
              />{' '}
              On Sale
            </label>
            <ButtonContainer>
              <button type="submit">Add</button>
              <button type="cancel">Cancel</button>
            </ButtonContainer>
          </CardContainer>
          <h2>You entered the following: {product.name}</h2>
          <p>
            {product.price} {product.currency}
          </p>
          <p>{product.category}</p>
          <p>{product.size}</p>
          <p>{product.supportContact}</p>
          <p>On Sale: {product.onSale ? 'Yes' : 'No'}</p>
        </form>
      </MainContainer>
    </WrapContainer>
  );
}

// onClick={clickHandler}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border: black solid 1px;
  width: 400px;
  border-radius: 10px;
  padding: 1rem;
  background-image: url(${wallpaper});
  background-size: cover;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  h1 {
  }
`;

const NumberContainer = styled.section`
  display: flex;
  justify-content: left;
  gap: 0.5rem;

  label {
    text-align: left;
  }
`;

const Categorystyle = styled.select`
  width: 350px;
`;

const Radiocontainer = styled.div`
  display: flex;

  gap: 1rem;
`;

const LabelStyler = styled.label`
  text-align: left;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    width: 165px;
    height: 35px;
    border: ivory solid 2px;
    border-radius: 5px;
    opacity: 0.8;
    color: white;
    font-size: 1rem;
  }

  button:first-of-type {
    background-color: green;
  }

  button:last-of-type {
    background-color: black;
  }
`;

const InputStyler = styled.input`
  width: 350px;
`;

const Headerstyle = styled.h1`
  display: flex;
  justify-content: center;
`;

const WrapContainer = styled.div`
  color: white;
  width: 400px;
`;
