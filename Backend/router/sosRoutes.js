import express from "express";
import { createSOS } from "../controller/sosController.js";
import { isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", isPatientAuthenticated, createSOS);//

export default router;
