import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .2s linear;
}
html, border-style, #root {
    max-height: 100vh;
    max-width: 100%;
    width: 100%;
    height: 100%;
}
*, button, input {
    border: 0;
    background: none;
    outline: none;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
    
    html {
        background: var(--gray-light);
        transition: background .3s ease-in-out;
        color: var(--secondary);
    }
    
    :root {

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;


    --primary: #000;
    --secondary: #15181C;
    --white: #D9D9D9;
    --black: #3c3c3c;
    --gray: #7A7A7A;
    --gray-light: #f2f2f2;
    --error: #ED6A5E;
    --shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
    --text-shadow: 0 0 12px rgba(0,0,0,.25);


    --wake: #0abfbc;
    --food: #70ad47;
    --go: #ff9900;
    --job: #8870ff;
    --recreation: #aab69b;
    --important: #ff0000;

    --working: "('src/assets/images/working.jpg')";
    }
`;
