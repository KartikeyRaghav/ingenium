import { Router } from "express";
import { login, signup } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/login").post(login);
userRouter.route("/signup").post(signup);

export default userRouter;
