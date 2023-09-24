import { Router } from "express";
import RegisterController from "../controllers/registerController";

const routerRegister: Router = Router();

// REGISTER A NEW USER OF SYSTEM

routerRegister.post('/', RegisterController.createNewUser);

export default routerRegister;