import { Router } from "express";
import createPropertiesController from "../../controllers/properties/createProperties.controller";
import listPropertiesController from "../../controllers/properties/listProperties.controller";
import autheticationMiddleware from "../../middlewares/authentication.middleware";
import validationCreatesMiddleware from "../../middlewares/validationCreates.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import { propertySchema } from "../../schemas/property/property.schema";

const propertyRoutes = Router()

propertyRoutes.post('/properties', autheticationMiddleware, verifyAdminMiddleware, createPropertiesController)
propertyRoutes.get('/properties', listPropertiesController)

export default propertyRoutes