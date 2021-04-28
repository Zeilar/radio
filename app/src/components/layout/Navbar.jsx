import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Row, flexbox, Container, Button } from '../styled-components';
import { mdiRadio } from '@mdi/js';
import Icon from '@mdi/react';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Login, Register } from '../views';

export default function Navbar() {
    const { isLoggedIn } = useContext(UserContext);

    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

    function openLogin() {
        setLoginOpen(true);
    }

    function openRegister() {
        setRegisterOpen(true);
    }

    return (
        <Header as="header">
            <Login visible={loginOpen} close={() => setLoginOpen(false)} />
            <Register visible={registerOpen} close={() => setRegisterOpen(false)} />
            <Nav as="nav">
                <Brand>
                    <Brandlink>
                        Angelin <BrandIcon /> Radio
                    </Brandlink>
                </Brand>
                <Row as={Navlist}>
                    {!isLoggedIn && (
                        <>
                            <ModalNavitem>
                                <ModalButton onClick={openLogin}>Logga in</ModalButton>
                            </ModalNavitem>
                            <ModalNavitem>
                                <ModalButton onClick={openRegister}>Registrera</ModalButton>
                            </ModalNavitem>
                        </>
                    )}
                    <Navitem>
                        <Navlink to="/program">Program</Navlink>
                    </Navitem>
                </Row>
            </Nav>
        </Header>
    );
}

const Header = styled(Row).attrs({ justify: "center" })`
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    position: sticky;
    z-index: 100;
    top: 0;
    ${({ theme }) => css`
        background-color: rgb(${theme.color.bodyLight});
        height: ${theme.navbarHeight}px;
    `}
`;

const Nav = styled(Container)`
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
`;

const Navlist = styled.ul.attrs({ align: "center" })`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 30px;
`;

const Navitem = styled.li`
    display: flex;
    align-items: center;
`;

const ModalNavitem = styled(Navitem)`
    
`;

const Brand = styled.span.attrs({ align: "center" })`
    ${flexbox}
    margin-right: auto;
`;

const navlink = css`
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    padding: 16px 0;
    user-select: none;
    font: inherit;
    font-weight: bold;
    height: 100%;
    ${({ theme }) => css`
        color: rgb(${theme.color.textPrimary});
        &.active {
            border-bottom-color: rgb(${theme.color.brand});
        }
        &:hover:not(.active) {
            color: rgb(${theme.color.link});
        }
    `}
`;

const Navlink = styled(NavLink).attrs({ exact: true })`
    ${navlink}
`;

const ModalButton = styled.button`
    ${navlink}
    background: none;
    border: 0;
`;

const Brandlink = styled(NavLink).attrs({ align: "center", to: "/", exact: true })`
    ${flexbox}
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
    user-select: none;
    ${({ theme }) => css`
        color: rgb(${theme.color.textPrimary});
        &.active {
            border-bottom-color: rgb(${theme.color.brand});
        }
    `}
`;

const BrandIcon = styled(Icon).attrs({ path: mdiRadio })`
    width: 1.25rem;
    height: 1.25rem;
    margin: auto 5px;
`;
