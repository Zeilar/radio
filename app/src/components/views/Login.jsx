import { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { UserContext } from '../contexts/UserContext';
import { Button, Col, H2 } from '../styled-components';
import { useClickOutside } from '../../hooks';

export default function Login({ visible, close }) {
    const { login, isLoggedIn } = useContext(UserContext);

    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const container = useClickOutside(close);
    
    useEffect(() => {
        return () => {
            document.querySelector("body").style.overflow = null;
        }
    }, []);

    useEffect(() => {
        const body = document.querySelector("body");
        if (visible) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = null;
        }
    }, [visible]);

    if (isLoggedIn) {
        return null;
    }

    async function submit(e) {
        e.preventDefault();
        setLoading(true);
        const success = await login({ username, password });
        setLoading(false);
        console.log('login success? ', success);
    }

    return (
        <Wrapper as="form" onSubmit={submit} visible={visible}>
            <Content ref={container}>
                <Header>Login</Header>
                <InputRow>
                    <Label>Username</Label>
                    <Input value={username} onChange={e => setUsername(e.target.value)} />
                </InputRow>
                <InputRow>
                    <Label>Password</Label>
                    <Input value={password} onChange={e => setPassword(e.target.value)} />
                </InputRow>
                <Button>Submit</Button>
            </Content>
        </Wrapper>
    );
}

const Content = styled(Col)`
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 35%;
    padding: 30px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    min-width: 500px;
    ${({ theme }) => css`
        border: 2px solid rgb(${theme.color.brand});
        background-color: rgb(${theme.color.bodyLight});
    `}
`;

const Wrapper = styled(Col)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    display: none;
    ${Content} {
        display: none;
    }
    ${({ visible }) => visible && css`
        display: block;
        ${Content} {
            display: flex;
        }
    `}
`;

const Header = styled(H2)`
    margin-bottom: 50px;
`;

const InputRow = styled(Col)`
    margin-bottom: 30px;
`;

const Label = styled.label`
    font-weight: bold;
    letter-spacing: 1px;
    cursor: text;
`;

const Input = styled.input.attrs({ type: "text" })`
    border: 0;
    border-bottom: 1px solid rgb(${({ theme }) => theme.color.brand});
    outline: 0;
    padding: 4px 0;
    &:focus {
        border-color: black;
    }
`;
