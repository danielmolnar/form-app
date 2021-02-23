import styled from 'styled-components';

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
        <div>
          {product.tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
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
  width: 500px;
  margin-top: 2rem;
  border-radius: 10px;

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
  width: 500px;
`;
