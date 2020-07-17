import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{ box-sizing: border-box; }
    html, body { 
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
    }
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, hr, form, fieldset, input, textarea, blockquote, th, td, p, button, span, select, option, figure { 
        box-sizing: border-box; 
        margin: 0; 
        padding: 0; 
        color: #4F4F4F; 
        font-family:'Noto Sans KR','malgun gothic','helvetica','sans-serif'; 
        font-size: 12px; 
        font-weight: 400; 
        -webkit-text-size-adjust: none; 
        -webkit-tap-highlight-color: transparent; }
    button { 
        margin: 0; 
        padding: 0; 
        padding-right: 0;
        cursor: pointer; 
        box-sizing: border-box; 
        background-color: transparent;
        border: 0; 
    }
    button:active { 
        border: 0; 
        border-style: outset; 
    }
    select {
        -webkit-appearance: none;
        -moz-appearance: none; appearance: none; 
    }
    input { border: 0; outline: 0; background-color: transparent; }
    button { outline: 0; }
    input:active, input:focus, textarea:active, textarea:focus {
        outline: 0; 
    }
    input::placeholder, textarea::placeholder { color: #bbb }
    input { -webkit-border-radius: 0; }
    button span, button:active span, button:focus span { 
        position: relative; 
        top: 0; 
        left: 0; 
        margin: 0 !important; 
    }


    ul,li,ol { list-style: none; }
    a { 
        color: #1c2126; 
        text-decoration: none; 
        font-style: normal; 
    }
    em { font-style: normal; }
    img { 
        margin: 0; 
        padding: 0; 
        border: none; 
        vertical-align: top; 
    }
    table,th,tr,td { 
        border: 1px solid #babcbd; 
        border-collapse: collapse; 
    }
    fieldset { border: 0; }
    label input[ type="checkbox"], label input[ type="radio" ] { 
        cursor: pointer; 
    }
`
