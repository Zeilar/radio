import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/api/auth");
                if (response.status === 200) {
                    const data = await response.json();
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

    function updateUser(data) {
        if (!data || !user) return;
        setUser(p => ({ ...p, ...data }));
    }

    async function loginOrRegister(url, data) {
        try {
            const response = await fetch(`/api/auth/${url}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status !== 200) {
                throw new Error();
            }
            const user = await response.json();
            setUser(user);
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
        if (!user) return;
        const { status } = await fetch('/api/auth/logout');
        if (status === 200) {
            setUser(null);
        }
    }

    async function likeOrUnlikeChannel(id, method) {
        if (!id) return false;
        const response = await fetch(`/api/like/channel/${id}`, { method });
        if (response.status === 200) {
            if (method === "POST") {
                updateUser({ channelLikes: [ ...user.channelLikes, id ] })
            } else if (method === "DELETE") {
                updateUser({ channelLikes: user.channelLikes.filter(channel => channel !== id) })
            }
            return true;
        }
        return false;
    }

    async function likeChannel(id) {
        likeOrUnlikeChannel(id, "POST");
    }
    
    async function unlikeChannel(id) {
        likeOrUnlikeChannel(id, "DELETE");
    }

    function hasLikedChannel(id) {
        if (!user) return false;
        return user.channelLikes.includes(id);
    }

    const values = {
        isLoggedIn: Boolean(user),
        user,
        loading,
        updateUser,
        logout,
        login,
        register,
        likeChannel,
        unlikeChannel,
        hasLikedChannel,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}
