import { useState, useEffect, useContext, useRef } from 'react';
import styled, { css } from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import { Col, H2 } from '../../styled-components';
import { useClickOutside } from '../../../hooks';
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import LoadingButton from '../../misc/LoadingButton';

export default function Login({ visible, close, openModal }) {
    const { login, isLoggedIn } = useContext(UserContext);

    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const container = useClickOutside(close, { condition: visible });

    const input = useRef();
    
    useEffect(() => {
        if (visible) input.current?.focus();
    }, [visible]);

    useEffect(() => {
        if (isLoggedIn) {
            setUsername('');
            setPassword('');
        }
    }, [isLoggedIn]);

    if (isLoggedIn) {
        return null;
    }

    async function submit(e) {
        e.preventDefault();
        setLoading(true);
        const success = await login({ username, password });
        setLoading(false);
        if (success) {
            setUsername('');
            setPassword('');
            close();
        }
    }

    return (
        <Wrapper as="form" onSubmit={submit} visible={visible}>
            <Content ref={container}>
                <Close onClick={close} />
                <Header>Logga in</Header>
                <RedirectWrapper>
                    Ej medlem?&nbsp;
                    <RedirectLink onClick={() => openModal("register")}>
                        Skapa ett konto
                    </RedirectLink>
                </RedirectWrapper>
                <InputRow>
                    <Label>Användarnamn</Label>
                    <Input value={username} onChange={e => setUsername(e.target.value)} ref={input} type="text" />
                </InputRow>
                <InputRow>
                    <Label>Lösenord</Label>
                    <Input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                </InputRow>
                <LoadingButton loading={loading}>
                    Logga in
                </LoadingButton>
            </Content>
        </Wrapper>
    );
}

const Content = styled(Col)`
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 30%;
    padding: 30px;
    transition: top 0.35s, opacity 0.05s;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    min-width: 500px;
    ${({ theme }) => css`
        background-color: rgb(${theme.color.bodyLight});
    `}
`;

const Wrapper = styled(Col)`
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

const Header = styled(H2)`
    margin-bottom: 10px;
`;

const RedirectWrapper = styled.p`
    margin-bottom: 50px;
`;

const RedirectLink = styled.span`
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
`;

const InputRow = styled(Col)`
    margin-bottom: 30px;
`;

const Label = styled.label`
    font-weight: bold;
    letter-spacing: 1px;
    cursor: text;
`;

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid rgb(${({ theme }) => theme.color.brand});
    outline: 0;
    padding: 4px 0;
    &:focus {
        border-color: black;
    }
`;

const Close = styled(Icon).attrs({ path: mdiClose })`
    position: absolute;
    right: 30px;
    top: 30px;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`;
