import { Response, Request, NextFunction } from "express";
import { hashPassword } from "../config/auth/bcrypt.utils"; 
import prismaClient from "../database/prismaClient";

class RegisterController {

    async createNewUser(req: Request, res: Response, next: NextFunction) {

        try {
            const { name, specialty, email, password } = req.body;

            const hashedPassword = await hashPassword(password);

            const newUser = await prismaClient.user.create({
                data: {
                    name,
                    specialty,
                    email,
                    password: hashedPassword
                }
            })
            res.send(newUser);

        } catch (error) {
            next(error);
        }

    }

}

export default new RegisterController();