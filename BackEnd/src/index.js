import express from "express"
import mongoose from "mongoose"

const app=express()

mongoose.connect("mongodb+srv://user1:prueba123@cluster0.pui3u.mongodb.net/crud")
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
})

const userModel = mongoose.model("emp", userSchema)

const emp1 = new userModel({
    name:"vicente",
    age:21,
})

emp1.save();
app.listen("3001", ()=>{
    console.log("server is running!!")
})

