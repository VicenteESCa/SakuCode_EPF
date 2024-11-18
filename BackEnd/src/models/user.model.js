import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
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
}, {
    timestamps: true,
    collection: "users",
    autoCreate: true
})  
/**
 * Pluraliza el nombre para crear una coleccion de usuarios 
 */
export default mongoose.model("user",userSchema)