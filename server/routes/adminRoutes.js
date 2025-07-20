import express from "express";
import { verifyAdmin } from "../middlewares/verifyToken.js";
import { getAllUsers,createUser,updateUser,toggleBlockUser} from "../controllers/adminController.js";

const router=express.Router();

router.use(verifyAdmin);

router.get('/users',getAllUsers);
router.post('/users',createUser);
router.put('/users/:id', updateUser);
router.patch('/users/:id/block', toggleBlockUser);


export default router
