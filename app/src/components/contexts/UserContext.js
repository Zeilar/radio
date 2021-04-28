import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("http://localhost:3000/api/auth");
                if (response.status === 200) {
                    const data = response.json();
                    setUser(data);
                }
            } catch (e) {
                console.error(e.message);
                setUser(null);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    function updateUser(user) {
        if (!user) return;
        setUser(p => ({ ...p, user }));
    }

    async function loginOrRegister(url, data) {
        try {
            const response = await fetch(`http://localhost:3000/api/auth/${url}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status !== 200) {
                throw new Error();
            }
            delete data.password;
            setUser(data);
            return true;
        } catch (e) {
            return false;
        }
    }

    async function register(data) {
        return await loginOrRegister("register", data);
    }

    async function login(data) {
        return await loginOrRegister("login", data);
    }

    async function logout() {
        if (!user) {
            return;
        }
        const response = await fetch('/api/auth/logout');
        if (response.code === 200) {
            setUser(null);
        }
    }

    const values = {
        isLoggedIn: Boolean(user),
        user,
        loading,
        updateUser,
        logout,
        login,
        register,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}
