import { Router } from "express";
import {
  login,
  logout,
  profile,
  refreshToken,
  signup,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.middleware.js";

const userRouter = Router();

userRouter.route("/login").post(login);
userRouter.route("/signup").post(signup);
userRouter.route("/profile").get(verifyJWT, profile);
userRouter.post("/refresh", refreshToken);
userRouter.post("/logout", logout);

export default userRouter;
