"use strict";
exports.__esModule = true;
exports.authorize = void 0;
function authorize(req, res, next) {
    if (req.session.user) {
        next();
    }
    else {
        res.sendStatus(401);
    }
}
exports.authorize = authorize;
