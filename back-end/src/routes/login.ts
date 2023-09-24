import { Router } from "express";
import loginController from "../controllers/loginController";

const routerLogin: Router = Router();

// LOGIN USER OF SYSTEM
routerLogin.get('/', loginController.getUser);

export default routerLogin;