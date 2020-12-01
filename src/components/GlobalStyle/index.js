import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    &:focus {
      outline: none;
    } 
  }

  html, body {
    width: 100%;
    margin: 0;
  }
`;

export default GlobalStyle;
