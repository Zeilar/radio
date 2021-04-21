import express from 'express';
import * as authController from "../controllers/authController";
import { authorize } from '../middlewares/auth';
const router = express.Router();

router.get("", authController.authenticate);
router.get("/logout", authController.logout);
router.post("/login", authorize, authController.login);

export default router;
