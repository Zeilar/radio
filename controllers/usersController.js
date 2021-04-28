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
        return res.json(users);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
}

async function getUserById(req, res) {
    const id = Number(req.params.id);
    if (!id) {
        return res.sendStatus(400);
    }
    try {
        const user = await prisma.user.findUnique({
            where: { id: id },
            include: { recipes: true },
        });
        if (!user) {
            return res.sendStatus(404);
        }
        return res.json(user);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
}

async function updateUser(req, res) {
    const id = Number(req.params.id);
    const { username, password } = req.body;

    if (!id || !username || !password) {
        return res.sendStatus(400);
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
        return res.sendStatus(200);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
}

async function deleteUser(req, res) {
    const id = Number(req.params.id);
    if (!id) {
        return res.sendStatus(400);
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
        return res.sendStatus(200);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
}

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};
