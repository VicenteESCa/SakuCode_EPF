import mongoose from 'mongoose';

export const ConnectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://user1:prueba123@cluster0.pui3u.mongodb.net/crud")
        console.log("El import utilizado en el Index esta funcionando correctamente\n,es decir, la conexion se realizo con exito")
        
    }
    catch (error){
        console.log(error)
    }
}
