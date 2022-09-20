import { Request, Response } from "express"
import listPropertiesByCategoryService from "../../services/categories/listPropertiesByCategory.service"

const listPropertyByCategoriesController = async (req: Request, res: Response) => {

    const { id } = req.params
    const property = await listPropertiesByCategoryService(id)
    return res.status(200).json(property)

}

export default listPropertyByCategoriesController