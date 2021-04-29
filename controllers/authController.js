const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function authenticate(req, res) {
    const id = Number(req.session.user?.id);
    if (!id) {
        return res.status(401).end();
    }
    const user = await prisma.user.findUnique({
        where: { id },
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
    if (user) {
        programLikes = user.programLikes.map(like => like.program_id);
        channelLikes = user.channelLikes.map(like => like.program_id);
        res.json({ username: user.username, programLikes, channelLikes });
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
            return res.status(422).end({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        delete createdUser.password;
        req.session.user = createdUser;
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

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
        return res.status(422).json({ message: "User does not exist" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
        delete user.password;
        req.session.user = user;
        res.status(200).end();
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
