import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from '../components/Tag';
import wallpaper from '../assets/wallpaper.svg';
import isValidForm from '../lib/validateFunctions';

export default function ProductForm({ submitFunction }) {
  const initialProduct = {
    category: '',
    currency: '',
    name: '',
    onSale: false,
    price: '',
    size: '',
    supportContact: '',
    tags: [],
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
    if (isValidForm(product)) {
      submitFunction(product);
      setProduct(initialProduct);
    } else {
      alert('Please enter valid data');
    }
  }

  const removeProductTag = (deleteTag) => {
    const remainingTags = product.tags.filter((tag) => tag !== deleteTag);
    setProduct({ ...product, tags: remainingTags });
  };

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
                <p>S</p>
                <input
                  type="radio"
                  value="medium"
                  name="size"
                  onChange={handleChange}
                  checked={product.size === 'medium'}
                />{' '}
                <p>M</p>
                <input
                  type="radio"
                  value="large"
                  name="size"
                  onChange={handleChange}
                  checked={product.size === 'large'}
                />{' '}
                <p>L</p>
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
            <Tag
              addProfileTag={addProductTag}
              tags={product.tags}
              removeProfileTag={removeProductTag}
            />
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
          <p>You entered the following: {product.name}</p>
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

ProductForm.propTypes = {
  submitFunction: PropTypes.func,
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${wallpaper});
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  gap: 0.8rem;
  padding: 1rem;
  width: 400px;
  p {
    margin-left: 0.5rem;
  }
`;

const NumberContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  label {
    text-align: left;
  }
`;

const Categorystyle = styled.select`
  width: 350px;
`;

const Radiocontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  p {
    margin-left: 0.5rem;
    margin-right: 1rem;
  }
`;

const LabelStyler = styled.label`
  text-align: left;
  width: 100%;
  margin-bottom: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0.5rem;

  button {
    border: ivory solid 2px;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    height: 35px;
    opacity: 0.8;
    width: 165px;
  }

  button:first-of-type {
    background-color: green;
    margin-right: 1rem;
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
