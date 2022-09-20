import { Request, Response } from "express"
import listCategoryService from "../../services/categories/listCategory.service"

const listCategoriesController = async (req: Request, res: Response) => {

    const allCategories = await listCategoryService()
    return res.status(200).json(allCategories)

}

export default listCategoriesController