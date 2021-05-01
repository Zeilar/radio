const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function likeChannel(req, res) {
    like(req, res, "channel");
}

function unlikeChannel(req, res) {
    unlike(req, res, "channel");
}

function likeProgram(req, res) {
    like(req, res, "program");
}

function unlikeProgram(req, res) {
    unlike(req, res, "program");
}

async function like(req, res, resource) {
    const resource_id = Number(req.params.id);
    if (!resource_id) return status(400).end();
    try {
        const data = await prisma[`${resource}Likes`].findFirst({
            where: {
                [`${resource}_id`]: resource_id,
                user_id: req.session.user,
            },
        });
        if (data) return res.status(400).end();

        await prisma[`${resource}Likes`].create({
            data: {
                [`${resource}_id`]: resource_id,
                user_id: req.session.user,
            },
        });
        res.status(200).end();
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}

async function unlike(req, res, resource) {
    const resource_id = Number(req.params.id);
    if (!resource_id) return status(400).end();
    try {
        const data = await prisma[`${resource}Likes`].findFirst({
            where: {
                [`${resource}_id`]: resource_id,
                user_id: req.session.user,
            },
        });
        if (!data) return res.status(400).end();

        await prisma[`${resource}Likes`].delete({
            where: { id: data.id },
        });
        res.status(200).end();
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}

module.exports = {
    likeChannel,
    likeProgram,
    unlikeChannel,
    unlikeProgram,
};
