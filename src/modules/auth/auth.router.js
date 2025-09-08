import { Router } from "express";
import { authLogin, authResgister } from "./auth.controller.js";


const authRouter = Router();


authRouter.post('/register', authResgister);
authRouter.post('/login', authLogin);

export default authRouter;