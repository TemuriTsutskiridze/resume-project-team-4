import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: "Helvetica Neue";
        src: url("../fonts/HelveticaNeue.ttc") format("truetype");
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: "Helvetica Neue", sans-serif;
        min-height: 100vh;
     } 
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box
}
html{
    font-size:62.5%
}

`;

export default GlobalStyle;
