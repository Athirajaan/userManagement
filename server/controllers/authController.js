import User from "../models/userModel.js"
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const SignUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || name.length < 3) {
      return next(errorHandler(400, 'Name must be at least 3 characters'));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return next(errorHandler(400, 'Invalid email format'));
    }

    if (!password || password.length < 8) {
      return next(errorHandler(400, 'Password must be at least 8 characters'));
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(409, 'Email already in use. Please login.'));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    next(err);
  }
};


export const SignIn=async(req,res,next)=>{
    try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(errorHandler(400, 'All fields are required'));
    }

    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, 'User not found. Please sign up.'));
    }
    if (user.isBlocked) {
   return next(errorHandler(403, 'This account is blocked. Contact admin.'));
   }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(errorHandler(401, 'Incorrect password'));
    }

    // Create JWT
    const token = jwt.sign(
      { id: user._id, role: user.role || 'user' },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role || 'user',
      },
    });
  } catch (err) {
    next(err);
  }
}