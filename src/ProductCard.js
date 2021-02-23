import styled from 'styled-components';
import wallpaper from './wallpaper.svg';

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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: solid black 1px;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 400px;
  margin-top: 2rem;
  border-radius: 10px;
  background-image: url(${wallpaper});
  background-size: cover;
  color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  h1 {
    text-align: center;
  }
`;

const ProdNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p:first-of-type {
    font-size: 1.4rem;
    font-weight: 600;
  }

  p:last-of-type {
    font-size: 1rem;
  }
`;
const Headerstyle = styled.h1`
  display: flex;
  justify-content: center;
  width: 400px;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  padding: 0.4rem;

  p {
    margin-right: 0.5rem;
    border: white solid 1px;
    background-color: ivory;
    border-radius: 10px;
    padding: 0.4rem;
    color: black;
  }
`;
