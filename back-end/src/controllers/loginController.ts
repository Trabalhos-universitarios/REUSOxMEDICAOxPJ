import { Response, Request, NextFunction } from "express";
import prismaClient from "../database/prismaClient";
import { comparePassword } from "../config/auth/bcrypt.utils";

class LoginController {



    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const dataUser = req.body;

            const getUser = await prismaClient.user.findFirst({
                where: {
                    name: dataUser.name?.toString(),
                }
            });

            if (getUser && await comparePassword(dataUser.password, getUser.password)) {
                console.log('Usuário encontrado:', getUser);
                const objetoReq = {name: getUser.name, email: getUser.email, especialty: getUser.specialty};
                res.send({ ...objetoReq, status: true });
              } else {
                console.log('Usuário não encontrado');
                res.status(404).send({ resposta: 'Usuário não encontrado', status: false });
              }
              

        } catch (error) {
            next(error);
        }
    }

}

export default new LoginController();