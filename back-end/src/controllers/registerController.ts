import { Response, Request, NextFunction } from "express";

class RegisterController {

    createNewUser = async (req: Request, res: Response, next: NextFunction) => {

        const { user_name, user_adress, user_phone, user_document } = req.body;

        try {
            
        } catch (error) {
            next(error);
        }
        
    }

}

export default new RegisterController();