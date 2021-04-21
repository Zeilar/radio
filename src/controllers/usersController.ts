import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

interface findOrFailType {
    code: number,
    user?: object,
}

export async function findOrFail(id: number): Promise<findOrFailType> {
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

export async function getUsers(req: any, res: any): Promise<void> {
    try {
        let users = await prisma.user.findMany();
        users = users.map((user: any) => {
            delete user.password;
            return user;
        });
        res.json(users);
        return;
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
        return;
    }
}

export async function getUserById(req: any, res: any): Promise<void> {
    const id = Number(req.params.id);
    if (!id) {
        res.sendStatus(400);
        return;
    }
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
            res.sendStatus(404);
            return;
        }
        res.json(user);
        return;
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
        return;
    }
}

export async function register(req: any, res: any): Promise<void> {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.sendStatus(400);
        return;
    }
    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (user) {
            res.sendStatus(422);
            return;
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
        res.sendStatus(200);
        return;
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
        return;
    }
}

export async function updateUser(req: any, res: any): Promise<void> {
    const id = Number(req.params.id);
    const { username, password } = req.body;

    if (!id || !username || !password) {
        res.sendStatus(400);
        return;
    }
    
    const { code } = await findOrFail(id);
    if (code !== 200) {
        res.sendStatus(code);
        return;
    }

    try {
        await prisma.user.update({
            where: { id },
            data: {},
        });
        res.sendStatus(200);
        return;
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
        return;
    }
}

export async function deleteUser(req: any, res: any): Promise<void> {
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
            res.sendStatus(404);
            return;
        }
        await prisma.user.delete({ where: { id } });
        res.sendStatus(200);
        return;
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
        return;
    }
}
