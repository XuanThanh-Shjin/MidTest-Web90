import { Router } from "express";
import authRouter from "../modules/auth/auth.router.js";
import postRouter from "../modules/post/post.router.js";


const router = Router();



router.use('/auth/user', authRouter);
router.use('/auth/user/login/posts', postRouter)

export default router;