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
        const { status } = await fetch('http://localhost:3000/api/auth/logout');
        if (status === 200) {
            setUser(null);
        }
    }

    async function likeOrUnlikeChannel(id, method = "POST") {
        if (!id) return false;
        const response = await fetch(`http://localhost:3000/api/like/channel/${id}`, { method });
        if (response.status === 200) {
            if (method === "POST") {
                updateUser({ channelLikes: [ ...user.channelLikes, id ] })
            } else if (method === "DELETE") {
                updateUser({ channelLikes: user.channelLikes.filter(channelId => channelId !== id) })
            }
            return true;
        }
        return false;
    }

    async function likeOrUnlikeProgram(id, method = "POST") {
        if (!id) return false;
        const { status } = await fetch(`http://localhost:3000/api/like/program/${id}`, { method });
        if (status === 200) {
            if (method === "POST") {
                updateUser({ programLikes: [ ...user.programLikes, id ] })
            } else if (method === "DELETE") {
                updateUser({ programLikes: user.programLikes.filter(programId => programId !== id) })
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

    async function likeProgram(id) {
        likeOrUnlikeProgram(id, "POST");
    }
    
    async function unlikeProgram(id) {
        likeOrUnlikeProgram(id, "DELETE");
    }

    function hasLikedChannelOrProgram(id, resource) {
        if (!user || user[resource].length <= 0) {
            return false;
        }
        return user[resource].includes(id);
    }

    function hasLikedChannel(id) {
        return hasLikedChannelOrProgram(id, "channelLikes");
    }
    
    function hasLikedProgram(id) {
        return hasLikedChannelOrProgram(id, "programLikes");
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
        likeProgram,
        unlikeProgram,
        hasLikedChannel,
        hasLikedProgram,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}
