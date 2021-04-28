import { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { UserContext } from '../contexts/UserContext';
import { Button, Col } from '../styled-components';
import { useClickOutside } from '../../hooks';

export default function Login({ visible, close }) {
    const { login, isLoggedIn } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const container = useClickOutside(close);

    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        return () => {
            body.style.overflow = "hidden";
        }
    }, []);

    if (isLoggedIn) {
        return null;
    }

    async function submit(e) {
        e.preventDefault();
        const success = await login({ username, password });
        console.log(success);
    }

    return (
        <Wrapper as="form" onSubmit={submit} visible={visible}>
            <Content ref={container}>
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
    top: 25%;
    padding: 30px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
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

const InputRow = styled(Col)`
    
`;

const Label = styled.label`
    
`;

const Input = styled.input.attrs({ type: "text" })`
    border: 0;
`;
