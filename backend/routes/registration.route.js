import { Router } from "express";
import { registerTeam } from "../controllers/registration.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.middleware.js";

const registrationRouter = Router();

registrationRouter.post("/register", verifyJWT, registerTeam);

export default registrationRouter;
