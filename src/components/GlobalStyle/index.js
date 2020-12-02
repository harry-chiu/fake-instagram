import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: PingFang TC, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;

    &:focus {
      outline: none;
    } 

    ::-webkit-scrollbar {
      display: none;
    }
  }

  html, body {
    width: 100%;
    margin: 0;
    color: #ffffff;
    background: #000000;
  }
`;

export default GlobalStyle;
