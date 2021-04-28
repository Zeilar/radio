const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function authenticate(req, res) {
    const userSession = req.session.user;
    if (!userSession) {
        return res.status(401).end();
    }
    const user = await prisma.user.findUnique({ where: { id: userSession.id } }); // include user likes
    delete user.password;
    if (user) {
        res.json(user);
    } else {
        res.status(401).end();
    }
}

function logout(req, res) {
    try {
        delete req.session.user;
        res.sendStatus(200);
    } catch (e) {
        res.status(500).end();
    }
}

async function register(req, res) {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username || !password) {
        return res.status(400).end();
    }
    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (user) {
            return res.sendStatus(422);
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
        return res.status(200).end();
    } catch (e) {
        console.error(e);
        return res.status(500).end();
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
        res.status(422);
        res.json({ message: "Incorrect password" });
    }
}

module.exports = {
    logout,
    login,
    authenticate,
    register,
};
