import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import {createAccesToken, tokenForUser} from '../libs/userJWT.js'

export const register = async (req, res) => {
    /**Lectura del body en la peticion */
    console.log("body recibido", req.body);
    const { username, email, password } = req.body;

    /**Try catch para la asincronia */
    try {
        const hashs = await bcrypt.hash(password,10);
        const newUser = new User({
            username,
            email,
            password:hashs,
        });
        
        const savedUser = await newUser.save();

        res = tokenForUser(savedUser, res);
    } catch(error) {
        res.status(500).json({ message: "Error al registrar usuario: " + error.message });
    }
}

export const login = async (req, res) => {
    /**Lectura del body en la peticion */
    console.log("body recibido", req.body);
    const { email, password } = req.body;

    /**Try catch para la asincronia */
    try {
        const user = await User.findOne({ email });

        if( !user ) return res.status(400).json({
            message: "Chuata no hay"
        });

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({
            message: "mala tu wea de contraseña"
        });

        res = tokenForUser(user, res);
    } catch(error) {
        res.status(500).json({ message: "Error en Iniciar Sesion: " + error.message });
    }
}
