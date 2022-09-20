import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appErrors";
import jwt, { decode }  from "jsonwebtoken";
import "dotenv/config"

const autheticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    
    if(!token) {
        throw new AppError( 'Favor logar na aplicação', 401 )
    }

    const tokenVerify = token.split(' ')[1]

    jwt.verify(tokenVerify, process.env.SECRET_KEY as string, (error: any, decode: any) => {
        if(error) {
            throw new AppError( 'Token inválido', 401)
        }
        
        req.user = {
            isAdm: decode.isAdm,
            isActive: decode.isActive,
            id: decode.subject
        }

        next()
    })                                   

}

export default autheticationMiddleware