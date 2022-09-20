import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer";
import createUserService from "../../services/users/createUser.service"

const createUserController = async (req: Request, res: Response) => {

    const newUser = await createUserService(req.body)
    const {password, ...user} = newUser
    return res.status(201).json(instanceToPlain(user))
    
}

export default createUserController