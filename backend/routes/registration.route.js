import { Router } from "express";
import {
  getTeamByParticipantEmail,
  registerTeam,
} from "../controllers/registration.controller.js";
import { verifyJWT } from "../middlewares/verifyJWT.middleware.js";

const registrationRouter = Router();

registrationRouter.post("/register", verifyJWT, registerTeam);
registrationRouter.get("/", verifyJWT, getTeamByParticipantEmail);

export default registrationRouter;
