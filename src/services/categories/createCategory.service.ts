import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories/categories.entity"
import AppError from "../../errors/appErrors"
import { ICategoryRequest } from "../../interfaces/categories"

const createCategoryService = async (name : string) => {
    const categoriesRepository = AppDataSource.getRepository(Categories)
    
    const conferCategory = await categoriesRepository.findOneBy({name})
    if(conferCategory) {
        throw new AppError( "Categoria já existente", 400 )
    }

    const newCategory = categoriesRepository.create({
        name
    })
    
    await categoriesRepository.save(newCategory)

    return newCategory
}

export default createCategoryService