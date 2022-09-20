import { Request, Response } from "express"
import loginUserService from "../../services/users/loginUser.service"

const loginUserController = async (req: Request, res: Response) => {

    const { email, password } = req.body
    const token = await loginUserService({email, password})
    return res.status(200).json({token})

}

export default loginUserController