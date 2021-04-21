export function authorize(req: any, res: any, next: any): any {
    if (req.session.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}
