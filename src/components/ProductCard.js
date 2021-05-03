import PropTypes from 'prop-types';
import styled from 'styled-components';
import wallpaper from '../assets/wallpaper.svg';

export default function ProductCard({ product }) {
  return (
    <>
      <CardWrapper>
        <Headerstyle>New Product</Headerstyle>
        <ProdNameWrapper>
          <p>Product Name: </p>
          <p>{product.name}</p>
        </ProdNameWrapper>
        <ProdNameWrapper>
          <p>Product Price: </p>
          <p>{product.price}</p>
        </ProdNameWrapper>
        <ProdNameWrapper>
          <p>Product Currency: </p>
          <p>{product.currency}</p>
        </ProdNameWrapper>
        <ProdNameWrapper>
          <p>Product Size: </p>
          <p>{product.size}</p>
        </ProdNameWrapper>
        <ProdNameWrapper>
          <p>Product Support Contact </p>
          <p>{product.supportContact}</p>
          <p>On Sale: {product.onSale ? 'Yes' : 'No'}</p>
        </ProdNameWrapper>
        <TagsList>
          {product.tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </TagsList>
      </CardWrapper>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${wallpaper});
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  color: white;
  margin-bottom: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  width: 400px;

  h1 {
    text-align: center;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const ProdNameWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  p:first-of-type {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p:last-of-type {
    font-size: 1rem;
  }
`;
const Headerstyle = styled.h2`
  display: flex;
  justify-content: center;
  width: 400px;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;

  p {
    background-color: ivory;
    border: white solid 1px;
    border-radius: 10px;
    color: black;
    margin-right: 0.5rem;
    padding: 0.4rem;
  }
`;
