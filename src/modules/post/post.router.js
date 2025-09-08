import { Router } from "express";
import userPostMiddleware from "./post.controller.js";



const postRouter = Router();


postRouter.post('/login/posts', userPostMiddleware);

export default postRouter;