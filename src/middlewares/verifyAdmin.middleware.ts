import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../errors/appErrors";


const verifyAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization
    if(!token) {
        throw new AppError( 'Favor logar na aplicação', 401)
    }

    const tokenVerify = token.split(' ')[1]

    jwt.verify(tokenVerify, process.env.SECRET_KEY as string, (error: any, decode: any) => {
        if(error) {
            throw new AppError( 'Token inválido', 401)
        }
        
        if(!decode.isAdm){
            throw new AppError( 'Rota somente para administradores', 403)
        }

        next()
    })  

}

export default verifyAdminMiddleware