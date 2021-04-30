import { useState, useEffect, useContext, useRef } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useClickOutside } from '../../../hooks';
import LoadingButton from '../../misc/LoadingButton';
import * as Styles from './modal.styles';

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
        <Styles.Wrapper as="form" onSubmit={submit} visible={visible}>
            <Styles.Content ref={container}>
                <Styles.Close onClick={close} />
                <Styles.Header>Logga in</Styles.Header>
                <Styles.RedirectWrapper>
                    Ej medlem?&nbsp;
                    <Styles.RedirectLink onClick={() => openModal("register")}>
                        Skapa ett konto
                    </Styles.RedirectLink>
                </Styles.RedirectWrapper>
                <Styles.InputRow>
                    <Styles.Label>Användarnamn</Styles.Label>
                    <Styles.Input value={username} onChange={e => setUsername(e.target.value)} ref={input} type="text" />
                </Styles.InputRow>
                <Styles.InputRow>
                    <Styles.Label>Lösenord</Styles.Label>
                    <Styles.Input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                </Styles.InputRow>
                <LoadingButton loading={loading}>
                    Logga in
                </LoadingButton>
            </Styles.Content>
        </Styles.Wrapper>
    );
}
