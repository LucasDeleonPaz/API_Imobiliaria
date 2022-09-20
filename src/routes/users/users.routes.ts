import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import deleteUserController from "../../controllers/users/deleteUser.controller";
import listUserController from "../../controllers/users/listUsers.controller";
import loginUserController from "../../controllers/users/loginUser.controller";
import autheticationMiddleware from "../../middlewares/authentication.middleware";
import isActiveMiddleware from "../../middlewares/isActive.middleware";
import validationCreatesMiddleware from "../../middlewares/validationCreates.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import { userSchema } from "../../schemas/user/user.schema";

const userRoutes = Router()

userRoutes.post('/users',createUserController)
userRoutes.get('/users', verifyAdminMiddleware, listUserController)
userRoutes.delete('/users/:id', verifyAdminMiddleware, isActiveMiddleware, deleteUserController)
userRoutes.post('/login', loginUserController)

export default userRoutes
