const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findOrFail(id) {
    id = Number(id);
    if (!id) return { code: 400 };
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        if (user === null) {
            return { code: 404 };
        }
        return { user, code: 200 };
    } catch (e) {
        return { code: 500 };
    }
}

async function getUsers(req, res) {
    try {
        let users = await prisma.user.findMany();
        users = users.map(user => {
            delete user.password;
            return user;
        });
        res.json(users);
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}

async function getUserById(req, res) {
    const id = Number(req.params.id);
    if (!id) {
        return res.status(400).end();
    }
    try {
        const user = await prisma.user.findUnique({
            where: { id: id },
            include: { recipes: true },
        });
        if (!user) {
            return res.status(404).end();
        }
        res.json(user);
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}

async function updateUser(req, res) {
    const id = Number(req.params.id);
    const { username, password } = req.body;

    if (!id || !username || !password) {
        return res.status(400).end();
    }
    
    const { code } = await findOrFail(id);
    if (code !== 200) {
        return res.sendStatus(code);
    }

    try {
        await prisma.user.update({
            where: { id },
            data: {},
        });
        return res.status(200).end();
    } catch (e) {
        console.error(e);
        return res.status(500).end();
    }
}

async function deleteUser(req, res) {
    const id = Number(req.params.id);
    if (!id) {
        return res.status(400).end();
    }

    const { code } = await findOrFail(id);
    if (code !== 200) {
        return res.sendStatus(code);
    }

    try {
        const user = await prisma.user.findUnique({ where: { id } });
        if (user === null) {
            return res.sendStatus(404);
        }
        await prisma.user.delete({ where: { id } });
        return res.status(200).end();
    } catch (e) {
        console.error(e);
        return res.status(500).end();
    }
}

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};
