import { DeepPartial } from "typeorm"
import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties/properties.entity"
import { Schedules } from "../../entities/schedules/schedules.entity"
import { Users } from "../../entities/users/users.entity"
import AppError from "../../errors/appErrors"
import { IScheduleRequest } from "../../interfaces/schedules"

const createSchedulesService = async (data: IScheduleRequest) => {

    const {userId, propertyId, date, hour} = data
    
    const schedulesRepository = AppDataSource.getRepository(Schedules)
    const userRepository = AppDataSource.getRepository(Users)
    const propertiesRepository = AppDataSource.getRepository(Properties)

    const findSchedule = await schedulesRepository.findOne({ where: {date, hour}})
    const findUser = await userRepository.findOne({where: {id: userId}})
    const findProperty = await propertiesRepository.findOne({where: {id: propertyId}})



    if(!findUser){
        throw new AppError( "Usuário não encontrado", 404 )
    }

    if(!findProperty){
        throw new AppError( "Propriedade não encontrada", 404)
    }

    if(findSchedule){
        throw new AppError( "Horário já marcado", 400 )
    }

    const verifyHour = Number(hour.split(':')[0])
    if(verifyHour < 8 || verifyHour > 18){
        throw new AppError( "Somente atendemos no horário comercial", 400 )
    }

    const dayDate = {
        day: Number(date.split('/')[2]),
        month: Number(date.split('/')[1])  - 1,
        year: Number(date.split('/')[0])
    }

    const testDate = new Date(dayDate.year, dayDate.month, dayDate.day)
    const verifyDay = testDate.getDay()
    if(verifyDay == 0 || verifyDay == 6){
        throw new AppError( "Somente atendemos de segunda a sábado", 400 )
    }

    const schedule = schedulesRepository.create({
        date,
        hour,
        propertyId : findProperty,
        user: findUser
    })

    await schedulesRepository.save(schedule)
    
    return "Horário marcado com sucesso"
}

export default createSchedulesService