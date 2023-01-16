import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
 box-sizing: border-box;

}
#root{
        margin:0 auto;
    }
body{
    background: #282C33;
    font-size: 16px;
    font-family: 'Fira Code', monospace;
    color: #FFFFFF;
}
a{
      text-decoration: none;

    }
`;
