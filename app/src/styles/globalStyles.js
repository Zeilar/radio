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

    button {
        cursor: pointer;
    }

    body {
        font-family: Poppins;
        min-height: 100vh;
        background-color: rgb(245, 245, 245);
        overflow-x: hidden;
    }
`;
