import ProductForm from './ProductForm';
import { useState } from 'react';
import styled from 'styled-components';

export default function Tag({ onCreateTag, tags }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onCreateTag(value);
      setValue('');
    }
  };

  return (
    <>
      <label>
        Product Tags
        <input
          type="text"
          name="tags"
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
      </label>
      <TagsList>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </TagsList>
    </>
  );
}

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  padding: 0.4rem;

  span {
    margin-right: 0.5rem;
    border: white solid 1px;
    background-color: ivory;
    color: black;
    border-radius: 10px;
    padding: 0.4rem;
  }
`;
