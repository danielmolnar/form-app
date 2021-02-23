import { createGlobalStyle } from 'styled-components';
import background from './background.svg';

export default createGlobalStyle`

*{
  box-sizing: border-box;
  font-family: sans-serif;
 }


 body {
  /* background-color: darkseagreen; */
  margin: 1rem;
  background-image: url(${background});
  background-size: cover;

  height: 200vh;

 }


`;
