import jwt from 'jsonwebtoken';
import { parseJwt } from '../util/tokenUtils.js';

export const validateToken = (req, res, next) => {
    const token = req.headers['authorization']?.replace("Bearer", "").trim();

    if (!token) {
        throw {type: "Unauthorized", message:"No Token"};
    };
    const {id, name, job} = parseJwt(token);

    res.locals.userId = {id, name, job};
    const SECRET = process.env.TOKEN_SECRET_KEY ?? '';
    try {
        jwt.verify(token, SECRET);
        next();
    } catch (error) {
        throw {type: "Unauthorized", message:"Invalid Token"};
    };
};