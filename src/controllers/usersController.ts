import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export async function findOrFail(id: number) {
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

export async function getUsers(req: any, res: any) {
    try {
        let users = await prisma.user.findMany();
        users = users.map((user: any) => {
            delete user.password;
            return user;
        });
        return res.json(users);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
}

export async function getUserById(req: any, res: any) {
    const id = Number(req.params.id);
    if (!id) {
        return res.sendStatus(400);
    }
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
            return res.sendStatus(404);
        }
        return res.json(user);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
}

export async function register(req: any, res: any) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
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
                email,
                password: hashedPassword,
            },
        });
        delete createdUser.password;
        req.session.user = createdUser;
        console.log(req.session);
        return res.sendStatus(200);
    } catch (e) {
        console.error(e);
        return res.sendStatus(500);
    }
}

export async function updateUser(req: any, res: any) {
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

export async function deleteUser(req: any, res: any) {
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
