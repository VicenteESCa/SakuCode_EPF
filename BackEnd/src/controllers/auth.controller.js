import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
    /**Lectura del body en la peticion */
    console.log("body recibido", req.body)
    const {username,email,password} = req.body
    /**Try catch para la asincronia */
    try{

        const hashs = await bcrypt.hash(password,10) 

        const newUser = new User({
            username,
            email,
            password:hashs,
        })
        const usuarioSaved = await newUser.save()
        

        // Solo devuelve un valor definido con el post
        res.json({
            id: usuarioSaved._id,
            username: usuarioSaved.username,
            email: usuarioSaved.,
            createdAt: usuarioSaved.createdAt,
            updatedAt: usuarioSaved.updatedAt,
        })
    }catch(error){
        console.error("Error al registrar usuario:", error);
        res.status(500).send("Error al registrar usuario");
    }
}

export const login = async (req,res) => {
    console.log("Body recibido", req.body)
    const {usernmae, email, password} = req.body
    try{
        const user = User({
            username,
            email,
            password
        })
        await user.res()
        res.send("Inicio de sesion")
        
    }catch(error){
        console.error("Error de acceder al ususario", error)
        res.status(500).send("Error de inicio de sesion")
    }
}   