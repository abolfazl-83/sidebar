import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
   *,*::after, *::before{
       padding : 0;
       margin : 0;
       box-sizing : border-box;
   }
   html {
       font-size : 62.5%;
   }
   body{
       font-size : 1rem;
   }
   .container-center{
        height : 100vh;
        display : flex;
        justify-content : center;
        align-items : center;
   }
`;

export default GlobalStyles;