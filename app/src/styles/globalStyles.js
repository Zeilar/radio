import { createGlobalStyle } from "styled-components";
import './fonts.css';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    img,
    svg {
        user-select: none;
        max-width: 100%;
    }

    ::selection {
        background-color: rgb(15, 15, 15);
        color: rgb(235, 235, 235);
    }

    input,
    textarea {
        font: inherit;
    }

    body {
        font-family: Poppins;
        min-height: 100vh;
    }
`;
