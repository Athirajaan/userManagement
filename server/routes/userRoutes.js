import express from "express"
import {LoadSignIn} from "../controllers/userController.js"

const router=express.Router();

router.get("/", LoadSignIn)

export default router;