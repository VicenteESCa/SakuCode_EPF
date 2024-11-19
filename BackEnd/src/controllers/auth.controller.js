import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import {createAccesToken} from '../libs/userJWT.js'


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
        const token = await createAccesToken({id: usuarioSaved._id})

        res.cookie('token', token)
        // Solo devuelve un valor definido con el post
        res.json({
            id: usuarioSaved._id,
            username: usuarioSaved.username,
            email: usuarioSaved.email,
            createdAt: usuarioSaved.createdAt,
            updatedAt: usuarioSaved.updatedAt,
        })

    }catch(error){ 
        res.status(500).send("Error al registrar usuario");
    }
}

export const login = async (req, res) => {
    /**Lectura del body en la peticion */
    console.log("body recibido", req.body)
    const {email,password} = req.body
    /**Try catch para la asincronia */
    try{
        const UserFind = await User.findOne({email})

        if(!UserFind) return res.status(400).json({
            message: "Chuata no hay"
        }) 

        const isMatch = await bcrypt.compare(password, UserFind.password)

        if(!isMatch) return res.status(400).json({
            message: "mala tu wea de contraseña"
        
        })

        const token = await createAccesToken({id: UserFind._id}); 

        res.cookie('token', token)
        // Solo devuelve un valor definido con el post
        res.json({
            id: UserFind._id,
            username: UserFind.username,
            email: UserFind.email,
            createdAt: UserFind.createdAt,
            updatedAt: UserFind.updatedAt,
            message: "Mire sabe quee mire, igual le salio bien ya"
        })

    }catch(error){ 
        res.status(500).send("Error al logear usuario");
    }
}
export const logOut = (req,res) =>{
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}