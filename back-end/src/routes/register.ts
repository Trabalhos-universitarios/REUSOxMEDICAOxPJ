import { Router } from "express";
import RegisterController from "../controllers/registerController";

const router: Router = Router();

// REGISTER A NEW USER OF SYSTEM
router.post('/registerUser', RegisterController.createNewUser);

export default router;