import styled, { css } from 'styled-components';

export const flexbox = css(({ justify, align, block }) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    width: ${block ? "100%" : null};
`);

export const header = css(({ theme }) => css`
    color: rgb(${theme.color.textPrimary});
    font-weight: bold;
`);

export const Button = styled.button(({ theme }) => css`
    cursor: pointer;
    color: rgb(${theme.color.textSecondary});
    background-color: rgb(${theme.color.brand});
    border: 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    &[disabled] {
        cursor: default;
        opacity: 0.5;
    }
`);

export const H1 = styled.h1`
    ${header}
    font-size: 3rem;
`;

export const H2 = styled.h2`
    ${header}
    font-size: 2.5rem;
`;

export const H3 = styled.h3`
    ${header}
    font-size: 2rem;
`;

export const H4 = styled.h4`
    ${header}
    font-size: 1.5;
`;

export const H5 = styled.h5`
    ${header}
    font-size: 1.25rem;
`;

export const H6 = styled.h6`
    ${header}
    font-size: 1rem;
`;

export const Row = styled.div`
    ${flexbox}
    flex-direction: row;
`;

export const Col = styled.div`
    ${flexbox}
    flex-direction: column;
`;

export const gridItem = css`
    background-color: rgb(${({ theme }) => theme.color.bodyDark});
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    border-radius: ${({ theme }) => theme.borderRadius}px;
`;

export const input = css`
    ${gridItem}
    border: 0;
    padding: 10px;
    outline: 0;
    transition: color 0.05s, box-shadow 0.05s;
    font-size: 1rem;
    font-family: Libre Franklin;
    width: 15rem;
    &::-webkit-inner-spin-button {
        display: none;
    }
    ${({ theme }) => css`
        color: rgb(${theme.color.textPrimary});
        border-radius: ${theme.borderRadius}px;
        &:focus {
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(${theme.color.bodyLight});
        }
    `}
`;

export const Input = styled(Col)`
    display: inline-flex;
    font-size: 1.5rem;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-family: Josefin Sans;
    cursor: text;
`;

export const TextInput = styled.input.attrs({ type: "text" })`
    ${input}
`;

export const NumberInput = styled.input.attrs({ type: "number", min: 1 })`
    ${input}
    min-width: calc(100%);
    width: 8rem;
`;

export const Textarea = styled.textarea.attrs({ rows: 6, cols: 50 })`
    ${input}
    width: unset;
    resize: none;
`;
