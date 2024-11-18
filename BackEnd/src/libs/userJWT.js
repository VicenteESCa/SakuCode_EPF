import jwt from 'jsonwebtoken'
import {TOKENs} from '../config.js'

export function tokenForUser(user, res) {
    return new Promise((resolve, reject) => {
        const token = jwt.sign({
            id: user._id,
            TOKENs
        }, 'secret123' , {
             expiresIn: "1d"
        }, (err,token) => {
            if (err) reject(err);
            resolve(token)
        });

        res.cookie('token', token);

        res.status(200).json({
            id: user._id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });
    })
}

export function createAccesToken(payload){
    return new Promise((resolve, reject) => {
        jwt.sign({
            payload,
            TOKENs
        }, 'secret123' ,{
             expiresIn: "1d"
        },(err,token) =>{
            if (err) reject(err);
            resolve(token)
        })  
    })
}