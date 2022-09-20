import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties/properties.entity"
import AppError from "../../errors/appErrors"

const listSchedulesByPropertyService = async (id: string) => {

    const schedulesRepository = AppDataSource.getRepository(Properties)
    const schedulesByPropertyId = await schedulesRepository.findOne({where: {id: id}, relations: {schedules: true}})
    if(!schedulesByPropertyId){
        throw new AppError( "propriedade não encontrada", 404 )
    }
    
    return schedulesByPropertyId
}

export default listSchedulesByPropertyService