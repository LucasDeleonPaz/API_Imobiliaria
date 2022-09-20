import { Request, Response } from "express"
import createSchedulesService from "../../services/schedules/createSchedules.service"

const createSchedulesController = async (req: Request, res: Response) => {

    const newShcedule = await createSchedulesService(req.body)
    return res.status(201).json({message: newShcedule})
}

export default createSchedulesController