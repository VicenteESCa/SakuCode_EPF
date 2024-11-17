import jwt from 'jsonwebtoken'
import {TOKENs} from '../config.js'

export function createAccesToken(payload){
    return new Promise((resolve, reject) =>{
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