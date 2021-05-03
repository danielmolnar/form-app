import { createGlobalStyle } from 'styled-components';
import background from './assets/background.svg';

export default createGlobalStyle`

*,
*::before,
*::after{
  box-sizing: border-box;
  font-family: sans-serif;
 }


 body {
  margin: 0;
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
 }


`;
