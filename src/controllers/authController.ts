import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export async function authenticate(req: any, res: any): Promise<any> {
    const userSession = req.session.user;
    if (!userSession) {
        return res.sendStatus(401);
    }
    const user = await prisma.user.findUnique({ where: { id: userSession.id } });
    delete user.password;
    res.status(user ? 200 : 401);
    res.json(user);
}

export function logout(req: any, res: any): void {
    try {
        delete req.session.user;
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

export async function login(req: any, res: any): Promise<void> {
    if (req.session.user) {
        res.sendStatus(405);
        return;
    }

    const { username, password } = req.body;
    if (!username || !password) {
        res.sendStatus(400);
        return;
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
