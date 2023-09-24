import { Response, Request, NextFunction } from "express";
import prismaClient from "../database/prismaClient";

class LoginController {

    async getUser(req: Request, res: Response, next: NextFunction) {
        
        try {
            const dataUser = req.query;

            const getUser = await prismaClient.user.findFirst({
                where: {
                    name: dataUser.name?.toString(),
                    email: dataUser.email?.toString()
                }
            })
            console.log('GET USER: ', getUser);
            
            res.send(getUser);

        } catch (error) {
            next(error);
        }

    }
}

export default new LoginController();