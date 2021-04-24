import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../styled-components';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    function hide() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setVisible(false);
    }

    useEffect(() => {
        function scrollHandler() {
            setVisible(window.scrollY >= 1000);
        }
        document.addEventListener("scroll", scrollHandler)
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        }
    }, []);

    return (
        <ButtonWrapper onClick={hide} visible={visible}>
            <ButtonIcon />
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled(Button)`
    display: flex;
    position: fixed;
    right: 15px;
    bottom: 50px;
    padding: 5px;
    z-index: 100;
    transition: opacity 0.1s ease-in, transform 0.2s ease-in;
    ${({ visible }) => !visible && css`
        opacity: 0;
        transform: scale(0.5);
        pointer-events: none;
    `}
`;

const ButtonIcon = styled(Icon).attrs({ path: mdiChevronDown })`
    width: 2rem;
    height: 2rem;
    transform: rotate(180deg);
    color: rgb(${({ theme }) => theme.color.textSecondary});
`;
