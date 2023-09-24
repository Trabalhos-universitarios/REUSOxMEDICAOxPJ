import { Response, Request, NextFunction } from "express";
import prismaClient from "../database/prismaClient";

class RegisterController {

    async createNewUser(req: Request, res: Response, next: NextFunction) {

        try {
            const { name, specialty, email } = req.body;

            const newUser = await prismaClient.user.create({
                data: {
                    name,
                    email,
                    specialty
                }
            })
            res.send(newUser);

        } catch (error) {
            next(error);
        }

    }

}

export default new RegisterController();