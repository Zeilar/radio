import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Row, flexbox } from './styled-components';
import { mdiRadio } from '@mdi/js';
import Icon from '@mdi/react';

export default function Navbar() {
    return (
        <Header>
            <Nav>
                <Row as={Navlist}>
                    <Brand>
                        <Brandlink>
                            Angelin <BrandIcon /> Radio
                        </Brandlink>
                    </Brand>
                    <Navitem>
                        <Navlink to="/programs">Programs</Navlink>
                    </Navitem>
                </Row>
            </Nav>
        </Header>
    );
}

const Header = styled.header`
    background-color: rgb(${({ theme }) => theme.color.bodyLight});
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
`;

const Nav = styled.nav`
    
`;

const Navlist = styled.ul.attrs({ align: "center" })`
    max-width: 800px;
    margin: auto;
`;

const Navitem = styled.li`
    display: flex;
`;

const Brand = styled(Navitem)`
    ${flexbox}
    margin-right: auto;
`;

const Navlink = styled(NavLink).attrs({ exact: true })`
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    padding: 12px 0;
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

const Brandlink = styled(NavLink).attrs({ align: "center", to: "/", exact: true })`
    ${flexbox}
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
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
