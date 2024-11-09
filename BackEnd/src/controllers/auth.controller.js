import User from "../models/user.model.js"
export const register = (req, res,next) => {

    const {email,password,username} = req.body
    new User({
        username,
        email,
        password
    })
    res.send('registrando')
}
export const login = (req,res,next) => {
    console.log(req.body) 
    res.send('logeado')
}