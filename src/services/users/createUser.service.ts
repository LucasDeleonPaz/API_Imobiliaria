import { IUser, IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { Users } from "../../entities/users/users.entity"
import bcrypt from 'bcrypt'
import AppError from "../../errors/appErrors"

const createUserService = async (data : IUserRequest) => {
    const userRepository = AppDataSource.getRepository(Users)

    const { name, email, password, isAdm } = data

    const verifyEmail = await userRepository.findOne({where: {email: email}})
    if(verifyEmail) {
        throw new AppError ( "Esse e-mail já fora cadastrado anteriormente", 400 )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = userRepository.create({
        name,
        email,
        password: hashedPassword,
        isAdm,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    await userRepository.save(newUser)

    return  newUser
}

export default createUserService