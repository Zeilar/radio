import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';

export default function Register() {
    const { register } = useContext(UserContext);

    return (
        <div>
            <button onClick={() => register({ username: "Philip", password: "123" })}>Register</button>
        </div>
    );
}
