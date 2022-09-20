import AppDataSource from "../../data-source"
import { Users } from "../../entities/users/users.entity"
import AppError from "../../errors/appErrors"
import { IUserLogin } from "../../interfaces/users"
import jwt from "jsonwebtoken"
import { compare } from "bcrypt"
import "dotenv/config"

const loginUserService = async ({email, password} : IUserLogin) => {
    const userRepository = AppDataSource.getRepository(Users)

    const user = await userRepository.findOneBy({email})
    if(!user) {
        throw new AppError( 'Usuário não encontrado na base de dados', 404 )
    }

    if(!user.isActive) {
        throw new AppError ( "Usuário desativado", 400 )
    }

    const verifyPassword = await compare(password, user.password)
    if(!verifyPassword) {
        throw new AppError ( "E-mail ou senha não conferem", 403 )
    }

    const token = jwt.sign({isAdm: user.isAdm, isActive : user.isActive }, process.env.SECRET_KEY as string, { expiresIn: "2h", subject: user.id})

    return token
}

export default loginUserService