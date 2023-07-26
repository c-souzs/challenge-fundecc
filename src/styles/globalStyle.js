import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
