import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
    

    


    body {
        margin: 0; 
        padding: 0;
        font-family: 'Manrope';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
        text-decoration: none;
    }

    p {
        padding: 0;
        margin: 0;
    }


    ul,
    ol {
    list-style: none;
    padding: 0;
    margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin: 0;
    padding: 0;
    }

    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;

export default GlobalStyle;
