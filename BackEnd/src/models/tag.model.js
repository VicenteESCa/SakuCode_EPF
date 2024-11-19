import mongoose from "mongoose"

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
}, {
    timestamps: true,
    collection: "tags",
    autoCreate: true,
});

/**
 * Pluraliza el nombre para crear una coleccion de usuarios 
 */
export default mongoose.model("tag", tagSchema);