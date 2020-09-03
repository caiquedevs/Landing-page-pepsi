import { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

const GlobalStyle = createGlobalStyle`
   /* largura do scroll vertical e horizonal*/
   ::-webkit-scrollbar { width: 2px; height: 4px; }
   /* Fundo do scroll*/
   ::-webkit-scrollbar-track { background: transparent; }
   /* Cor do scroll*/
   ::-webkit-scrollbar-thumb { background: silver; }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: ${colors.blue}
  }
`;

export default GlobalStyle;
