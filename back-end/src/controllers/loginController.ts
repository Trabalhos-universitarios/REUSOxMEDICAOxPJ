import { Response, Request, NextFunction } from "express";
import prismaClient from "../database/prismaClient";
import { comparePassword } from "../config/auth/bcrypt.utils";

class LoginController {



    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body;

            const getUser = await prismaClient.user.findFirst({
                where: {
                    email: email.toString(),
                }
            });

            if (getUser && await comparePassword(password, getUser.password)) {
                console.log('Usuário encontrado:', getUser);
                const objetoReq = {status: true, name: getUser.name, email: getUser.email, especialty: getUser.specialty};
                res.send(objetoReq);
              } else {
                console.log('Usuário não encontrado');
                res.send({ resposta: 'Usuário não encontrado', status: false });
              }
              

        } catch (error) {
            next(error);
        }
    }

}

export default new LoginController();