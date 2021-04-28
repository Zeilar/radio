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
        res.sendStatus(500);
    }
}

async function register(req, res) {
    const { username, password } = req.body;
    console.log(req.body);
    if (!username || !password) {
        return res.sendStatus(400);
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
        return res.sendStatus(200);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
}

async function login(req, res) {
    if (req.session.user) {
        return res.sendStatus(405);
    }

    const { username, password } = req.body;
    if (!username || !password) {
        return res.sendStatus(400);
    }

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
        res.status(422);
        res.json({ message: "User does not exist" });
        return;
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
        delete user.password;
        req.session.user = user;
        res.redirect("/");
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
