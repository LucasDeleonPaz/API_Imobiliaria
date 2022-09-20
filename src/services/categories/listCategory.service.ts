import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories/categories.entity"

const listCategoryService = async () => {

    const categoriesRepository = AppDataSource.getRepository(Categories)
    const allCategories = await categoriesRepository.find()
    return allCategories
}

export default listCategoryService