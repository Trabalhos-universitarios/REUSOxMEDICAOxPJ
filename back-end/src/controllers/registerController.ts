import { Response, Request, NextFunction } from "express";
import prismaClient from "../database/prismaClient";

class RegisterController {

    createNewUser = async (req: Request, res: Response, next: NextFunction) => {

        const { name, specialty, email } = req.body;

        console.log('ENTROU NA ROTA API. . .');
        

        try {

            const newUser = await prismaClient.user.create({
                data: {
                    name,
                    email,
                    specialty
                }
            })
            
        } catch (error) {
            next(error);
        }
        
    }

}

export default new RegisterController();