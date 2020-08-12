import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;

    }
    body {
        background: #011627;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
        overflow-y:scroll;
    }
    body, input, button {
        font-family: 'Roboto Mono', monospace;
        font-size:16px;
    }
    h1,h2,h3,h4,h5,h6, strong {
        font-family: 'Roboto Mono', monospace;
        font-weight: 500;
    }
    button {
        cursor:pointer;
    }
`
