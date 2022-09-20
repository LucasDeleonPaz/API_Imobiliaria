import { Router } from "express";
import createCategoryController from "../../controllers/categories/createCategory.controller";
import listCategoriesController from "../../controllers/categories/listCategory.controller";
import listPropertyByCategoriesController from "../../controllers/categories/listPropertyByCategories.controller";
import validationCreatesMiddleware from "../../middlewares/validationCreates.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import { propertySchema } from "../../schemas/property/property.schema";

const categoryRoutes = Router()

categoryRoutes.post('/categories', verifyAdminMiddleware, createCategoryController)
categoryRoutes.get('/categories', listCategoriesController)
categoryRoutes.get('/categories/:id/properties', listPropertyByCategoriesController)

export default categoryRoutes