import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Barlow Condensed';
    font-size: 21px;
    color: white;
    padding: 20px 40px;
    background-color: black;
    @media screen and (max-width: 800px){
        padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: white;
  }
  
  * {
    box-sizing: border-box;
  }
  
`;
