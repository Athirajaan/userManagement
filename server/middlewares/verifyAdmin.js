import React from "react";

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
