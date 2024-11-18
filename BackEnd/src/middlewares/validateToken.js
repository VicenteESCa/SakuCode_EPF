import jwt from 'jsonwebtoken'
import {TOKEN} from '../config.js'

export function authRequired(req, res, next) {
    const token = req.cookies.token;
    console.log(token);

    if ( !token ) return res.status(401).json({
        message: "No token provided, authorization denied."
    });

    jwt.verify(token, TOKEN, (error, user) => {
        if ( error ) return res.status(403).json({ message: "Invalid Token, authorization denied: " + error.message });

        req.user = user;

        next();
    });
}