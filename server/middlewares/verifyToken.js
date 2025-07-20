import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';


export const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return next(errorHandler(401, "No token provided"));

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(errorHandler(403, "Invalid token"));

    if (decoded.role !== 'admin') {
      return next(errorHandler(403, "Access denied: Admins only"));
    }

    req.user = decoded;
    next();
  });
};

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
