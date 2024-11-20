import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import {tokenForUser} from '../libs/userJWT.js'

export const register = async (req, res) => {
    /**Lectura del body en la peticion */
    console.log("body recibido", req.body);
    const { username,rut, email, region, comuna, password, termsAndConds} = req.body;

    /**Try catch para la asincronia */
    try {
        const hashs = await bcrypt.hash(password,10);
        const newUser = new User({
            username,
            rut,
            email,
            region,
            comuna,
            password:hashs,
            termsAndConds
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
            message: "User not found."
        });

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({
            message: "Incorrect password."
        });

        res = tokenForUser(user, res);
        // const token = await createAccesToken({id: UserFind._id}); 
        // res.cookie('token', token)
        
        // // Solo devuelve un valor definido con el post
        // res.json({
        //     id: UserFind._id,
        //     username: UserFind.username,
        //     email: UserFind.email,
        //     createdAt: UserFind.createdAt,
        //     updatedAt: UserFind.updatedAt,
        //     message: "Mire sabe quee mire, igual le salio bien ya"
        // })
    } catch(error) { 
        res.status(500).json({ message: "Error at login: " + error.message });
    }
}

export const logout = (req,res) =>{
    res.cookie('token', "", {
        expires: new Date(0)
    });
    res.sendStatus(200);
}

export const profile = async (req, res) => {
    console.log(req.user);
    const user = await User.findById(req.user.id);
    if ( !user ) return res.status(400).json({ message: "User not found." });

    return res.json({
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    });
}

export const test = async (req, res) => {
    console.log("test!!!");
    res.statusSend(200);
}