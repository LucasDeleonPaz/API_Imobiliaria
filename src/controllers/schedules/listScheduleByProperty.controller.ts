import { Request, Response } from "express"
import listSchedulesByPropertyService from "../../services/schedules/listSchedulesByProperty.service"

const listScheduleByPropertyController = async (req: Request, res: Response) => {

    const { id } = req.params
    const listShcedule = await listSchedulesByPropertyService(id)
    return res.status(200).json(listShcedule)

}

export default listScheduleByPropertyController