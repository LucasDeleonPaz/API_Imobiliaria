import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories/categories.entity"
import { Properties } from "../../entities/properties/properties.entity"
import AppError from "../../errors/appErrors"

const listPropertiesByCategoryService = async (id : string) => {

    const propertiesRepository = AppDataSource.getRepository(Properties)
    const categoriesReository = AppDataSource.getRepository(Categories)

    const findCategory = await categoriesReository.findOneBy({id})
    if(!findCategory){
        throw new AppError( "Categoria não existe", 404 )
    }

    const findPropertiesByCategory = await propertiesRepository.findOneBy({category: findCategory})

    return {...findCategory, properties: findPropertiesByCategory}
}

export default listPropertiesByCategoryService