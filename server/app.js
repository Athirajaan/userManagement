import express from 'express';
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(()=>console.log("databse connected succesfully"))
  .catch((err)=>console.log("mongodb error",err))

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",userRoutes);
app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);

app.use((err,req,res,next)=>{
   const statusCode=err.statusCode || 500;
   const message=err.message || "Internal server error";
   
   res.status(statusCode).json({
    success:false,
    error:message,
    statusCode
   })
})
app.listen(3000 ,()=>{
    console.log("server is listening on port 3000 !")
})


