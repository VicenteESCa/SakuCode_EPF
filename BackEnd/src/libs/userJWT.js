import jwt from 'jsonwebtoken'
import {TOKEN} from '../config.js'

export function createAccesToken(payload){
    return new Promise((resolve, reject) => {
        jwt.sign(payload, TOKEN, { expiresIn: "1d" }, (err,token) => {
            if (err) reject(err);
            resolve(token)
        })  
    })
}

export async function tokenForUser(user, res) {
    const token = await createAccesToken({ id: user._id });
    res.cookie('token', token);

    return res.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    });
}