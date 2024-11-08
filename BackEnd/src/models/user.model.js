import mongoose from "mongoose"

mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    age:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    }
})  
/**
 * Pluraliza el nombre para crear una coleccion de usuarios 
 */
export default  mongoose.model( 'User', userSchema )




