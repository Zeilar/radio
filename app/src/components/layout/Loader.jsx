import styled from 'styled-components';
import { mdiRadio } from '@mdi/js';
import Icon from '@mdi/react';
import { Col, H3 } from '../styled-components';

export default function Loader({ loading, message = null }) {
    if (loading === false) {
        return null;
    }

    return (
        <Wrapper justify="center" align="center">
            <IconOutlined />
            <Dots>
                <Dot />
                <Dot />
                <Dot />
            </Dots>
            {message && <Message>{message}</Message>}
        </Wrapper>
    );
}

const Wrapper = styled(Col)`
    color: rgb(${({ theme }) => theme.color.textPrimary});
    padding: 5px;
`;

const IconOutlined = styled(Icon).attrs({ path: mdiRadio })`
    width: 5rem;
    height: 5rem;
`;

const Message = styled(H3)`
    font-weight: normal;
`;

const Dots = styled.div`
    margin: 5px 0;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
`;

const Dot = styled.span`
    @keyframes jump {
        50% {
            transform: scale(0.95) translateY(-2px);
            background-color: rgb(0, 0, 0);
        }
    }
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: rgb(125, 125, 125);
    animation: jump 1s infinite ease-in-out;
    &:nth-child(2) {
        animation-delay: 0.25s;
    }
    &:nth-child(3) {
        animation-delay: 0.5s;
    }
`;
