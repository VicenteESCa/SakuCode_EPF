import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true,
    collection: "posts",
    autoCreate: true,
});

/**
 * Pluraliza el nombre para crear una coleccion de usuarios 
 */
export default mongoose.model("Post", postSchema);