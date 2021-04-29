const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function findUser(where, withPassword = false) {
    try {
        const user = await prisma.user.findFirst({
            where,
            include: {
                programLikes: {
                    select: {
                        program_id: true,
                    },
                },
                channelLikes: {
                    select: {
                        channel_id: true,
                    },
                },
            },
        });
        if (!user) return null;
        user.programLikes = user.programLikes.map(like => like.program_id);
        user.channelLikes = user.channelLikes.map(like => like.channel_id);
        if (!withPassword) {
            delete user.password;
        }
        return user;
    } catch (e) {
        console.error(e);
        return null;
    }
}

async function authenticate(req, res) {
    const id = Number(req.session.user);
    if (!id) {
        return res.status(401).end();
    }
    const user = await findUser({ id });
    if (user) {
        res.json(user);
    } else {
        res.status(401).end();
    }
}

function logout(req, res) {
    try {
        delete req.session.user;
        res.status(200).end();
    } catch (e) {
        res.status(500).end();
    }
}

async function register(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).end();
    }
    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (user) {
            return res.status(422).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const { id } = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        req.session.user = id;
        res.status(200).end();
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}

async function login(req, res) {
    if (req.session.user) {
        return res.status(405).end();
    }

    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).end();
    }
    
    const user = await findUser({ username }, true);
    if (!user) {
        return res.status(422).json({ message: "User does not exist" });
    }
    
    const match = await bcrypt.compare(password, user.password);

    if (match) {
        req.session.user = user.id;
        delete user.password;
        res.json(user);
    } else {
        res.status(422).json({ message: "Incorrect password" });
    }
}

module.exports = {
    logout,
    login,
    authenticate,
    register,
};
