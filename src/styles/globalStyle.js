import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto:wght@400;500&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: #fff;
        background-color: #111;
        font-family: 'Roboto', sans-serif;
    }

    img {
        display: block;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    h1, h2, h3, h4,
    h5, h6 {
        font-family: 'Inter', sans-serif;
    }
`

export default GlobalStyle