import { Router } from "express";
import createSchedulesController from "../../controllers/schedules/createSchedules.controller";
import listScheduleByPropertyController from "../../controllers/schedules/listScheduleByProperty.controller";
import autheticationMiddleware from "../../middlewares/authentication.middleware";
import validationCreatesMiddleware from "../../middlewares/validationCreates.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import { scheduleSchema } from "../../schemas/schedule/schedule.schema";

const scheduleRoutes = Router()

scheduleRoutes.post('/schedules', autheticationMiddleware,createSchedulesController)
scheduleRoutes.get('/schedules/properties/:id', autheticationMiddleware, verifyAdminMiddleware, listScheduleByPropertyController)

export default scheduleRoutes