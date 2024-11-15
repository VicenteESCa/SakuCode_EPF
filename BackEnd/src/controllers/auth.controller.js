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
        const usuarioSaved = await newUser.save()
        res.json(usuarioSaved)
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