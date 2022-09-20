import AppDataSource from "../../data-source"
import { Address } from "../../entities/address/address.entity"
import { Categories } from "../../entities/categories/categories.entity"
import { Properties } from "../../entities/properties/properties.entity"
import AppError from "../../errors/appErrors"
import { IPropertyRequest } from "../../interfaces/properties"


const createPropertyService = async (data :  IPropertyRequest) => {

    const addressRepository = AppDataSource.getRepository(Address)
    const categoriesRepository = AppDataSource.getRepository(Categories)
    const propertiesRepository = AppDataSource.getRepository(Properties)
    
    const { value, size, address, categoryId } = data

    const newAdrress = addressRepository.create({...address})
    await addressRepository.save(newAdrress)

    const verifyAddressProperty = await propertiesRepository.findOneBy({address: address})
    if(verifyAddressProperty){
        throw new AppError( "Essa propriedade já fora cadastrada", 400 )        
    }

    if(address.state.length > 2 ){
        throw new AppError( "Estado deve ter somente 2 digitos", 400 )
    }

    if(address.zipCode.length > 8){
        throw new AppError( "CEP deve ter somente 8 digitos", 400 )
    }

    const category = await categoriesRepository.findOneBy({id : categoryId})
    if(!category) {
        throw new AppError( "Essa categoria não existe", 404 )
    }

    const newProperty = propertiesRepository.create({
        value,
        size,
        address: newAdrress,
        category: category,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    await propertiesRepository.save(newProperty)

    return newProperty
}

export default createPropertyService


