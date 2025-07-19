import express from "express";

const router=express.Router();

router.use(verifyAdmin);

router.get('/users',getAllUsers);


export default router
