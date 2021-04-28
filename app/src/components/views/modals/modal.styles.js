import styled, { css } from 'styled-components';
import { Col, H2 } from '../../styled-components';
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';

export const Content = styled(Col)`
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 30%;
    padding: 30px;
    transition: top 0.35s, opacity 0.05s;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    min-width: 500px;
    ${({ theme }) => css`
        border: 2px solid rgb(${theme.color.brand});
        background-color: rgb(${theme.color.bodyLight});
    `}
`;

export const Wrapper = styled(Col)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: none;
    transition: 0.25s;
    opacity: 0;
    pointer-events: none;
    ${Content} {
        pointer-events: none;
    }
    ${({ visible }) => visible && css`
        display: block;
        pointer-events: all;
        opacity: 1;
        ${Content} {
            pointer-events: all;
            opacity: 1;
            top: 35%;
        }
    `}
`;

export const Header = styled(H2)`
    margin-bottom: 10px;
`;

export const RedirectWrapper = styled.p`
    margin-bottom: 50px;
`;

export const RedirectLink = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

export const InputRow = styled(Col)`
    margin-bottom: 30px;
`;

export const Label = styled.label`
    font-weight: bold;
    letter-spacing: 1px;
    cursor: text;
`;

export const Input = styled.input.attrs({ type: "text" })`
    border: 0;
    border-bottom: 1px solid rgb(${({ theme }) => theme.color.brand});
    outline: 0;
    padding: 4px 0;
    &:focus {
        border-color: black;
    }
`;

export const Close = styled(Icon).attrs({ path: mdiClose })`
    position: absolute;
    right: 30px;
    top: 30px;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`;
