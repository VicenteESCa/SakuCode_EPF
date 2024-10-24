import express from "express"
import mongoose from "mongoose"

const app=express()

mongoose.connect("mongodb+srv://user1:prueba123@cluster0.pui3u.mongodb.net/crud")
const userschema = new mongoose.schema({
    name:string,
    age:number,
})

const usermodel = mongoose.model("emp", userschema)

const emp1 = new usermodel({
    name:"vicente",
    age:21,
})

emp1.save();
app.listen("3001", ()=>{
    console.log("server is running!!")
})

