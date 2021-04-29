function loggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).end();
    }
}

module.exports = {
    loggedIn,
};
