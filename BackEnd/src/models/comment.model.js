import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    fromUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    toPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    title:{
        type: String,
    },
    contents: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
}, {
    timestamps: true,
    collection: "comments",
    autoCreate: true,
});

/**
 * Pluraliza el nombre para crear una coleccion de usuarios 
 */
export default mongoose.model("comment", commentSchema);