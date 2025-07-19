import User from "../models/userModel.js"
import bcrypt from "bcrypt";

export const SignUp=async(req,res)=>{
    try{
  const {name,email,password}=req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser=new User({name,email,password:hashedPassword})
  await newUser.save()
  res.status(201).json({message:"user created succesfully"})
    }catch(err){
       res.status(500).json({error:err.message})
    }
}