import User from "../models/user.model.js"

export const register = async (req, res) => {
    console.log("body recibido", req.body)
    const {username,email,password} = req.body
    
    try{
        const newUser = new User({
            username,
            email,
            password
        })
        await newUser.save()
        res.send("registrando")
    }catch(error){
        console.error("Error al registrar usuario:", error);
        res.status(500).send("Error al registrar usuario");
    }
}

export const login = (req,res) => {
    console.log(req.body) 
    res.send('logeado')
} 