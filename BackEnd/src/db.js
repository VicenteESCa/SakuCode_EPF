import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        // Conectar a la base de datos 'nosupe'
        await mongoose.connect('mongodb+srv://intento1vicenteEscarate:Clubsocial1100@clusterdbsakucode.i8rm2.mongodb.net/nosupe?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado a MongoDB Atlas en la base de datos 'nosupe'");
    } catch (error) {
        console.log("Error conectándose a MongoDB Atlas:", error);
    }
};

export default Db;