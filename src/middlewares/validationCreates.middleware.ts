import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validationCreatesMiddleware = (schema: AnySchema) => (req: Request, res: Response, next: NextFunction) => {

    //Middleware será responsável pela validação dos Schemas de todas as criações.                                  

}

export default validationCreatesMiddleware