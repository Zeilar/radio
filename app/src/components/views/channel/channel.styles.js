import styled, { css } from 'styled-components';
import { Col, fadeIn, H5 } from '../../styled-components';

export const Programs = styled.div`
    ${fadeIn}
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    grid-gap: 15px;
    margin-top: 15px;
`;

export const Program = styled(Col)`
    position: relative;
    ${({ theme, color }) => css`
        border: 1px solid rgb(${theme.color.border});
        border-bottom: 4px solid #${color};
        background-color: rgb(${theme.color.bodyLight});
        border-bottom-left-radius: ${theme.borderRadius}px;
        border-bottom-right-radius: ${theme.borderRadius}px;
    `}
`;

export const ProgramCard = styled(Col).attrs({ align: "flex-start" })`
    padding: 20px;
`;

export const ProgramDescription = styled.p`
    margin-top: 15px;
    font-family: Roboto;
`;

export const ProgramName = styled(H5).attrs({ exact: true })`
    color: rgb(${({ theme }) => theme.color.textPrimary});
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const ProgramInfo = styled.p`
    display: inline;
    font: italic 0.9rem Poppins;
    margin-top: 5px;
`;

export const ProgramImage = styled.img`
    object-fit: cover;
`;

export const ProgramColumn = styled.div`
    display: grid;
    grid-gap: 15px;
`;