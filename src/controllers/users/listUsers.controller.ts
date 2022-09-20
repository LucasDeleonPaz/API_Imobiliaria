import { Request, Response } from "express"
import listUsersService from "../../services/users/listUsers.service"

const listUserController = async (req: Request, res: Response) => {
    
    const allUsers = await listUsersService()
    res.status(200).json(allUsers)

}

export default listUserController