import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
    },
    rut:{
        type: String,
        required: true,
       // unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    region:{
        type: String,
        required: true,
    },
    comuna:{
        type: String,
        required: true,
    },
    /**
    termsAndConds: {
        type: Boolean,
        required: true
    } */
}, {
    timestamps: true,
    collection: "users",
    autoCreate: true
});

/**
 * Pluraliza el nombre para crear una coleccion de usuarios 
 */
export default mongoose.model("user", userSchema)