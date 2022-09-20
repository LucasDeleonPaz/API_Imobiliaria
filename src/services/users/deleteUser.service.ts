import AppDataSource from "../../data-source"
import { Users } from "../../entities/users/users.entity"
import AppError from "../../errors/appErrors"

const deleteUserService = async (id : string) => {
    const userRepository = AppDataSource.getRepository(Users)

    const user = await userRepository.findOneBy({id})
    if(!user){
        throw new AppError( "Usuário não encontrado", 404 )
    }

    if(!user.isActive){
        throw new AppError( "Usuário não encontrado", 400 )
    }

    user.isActive = false

    await userRepository.save(user)

    return user
}

export default deleteUserService