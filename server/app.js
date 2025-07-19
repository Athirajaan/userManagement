import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"

mongoose.connect(process.env.MONGO)
  .then(()=>console.log("databse connected succesfully"))
  .catch((err)=>console.log("mongodb error",err))

const app=express();

app.use(express.json());

app.use("/",userRoutes);
app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);

app.listen(3000 ,()=>{
    console.log("server is listening on port 3000 !")
})


