const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getChannelLikes(req, res) {
    
}

async function getProgramLikes(req, res) {
    
}

async function likeChannel(req, res) {
    
}

async function unlikeChannel(req, res) {
    
}

async function likeProgram(req, res) {
    const program_id = Number(req.params.id);
    if (!program_id) return status(400).end();
    try {
        await prisma.programLikes.create({
            data: {
                program_id,
                user_id: req.session.user.id,
            },
        });
        res.status(200).end();
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}

async function unlikeProgram(req, res) {
    
}

module.exports = {
    getChannelLikes,
    getProgramLikes,
    likeChannel,
    likeProgram,
    unlikeChannel,
    unlikeProgram,
};
