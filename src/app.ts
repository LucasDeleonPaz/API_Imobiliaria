import "reflect-metadata"
import express from "express"
import "express-async-errors"
import { handleErrorsMiddleware } from "./middlewares/handleErrors.middleware"
import userRoutes from "./routes/users/users.routes"
import categoryRoutes from "./routes/categories/categories.routes"
import propertyRoutes from "./routes/properties/properties.routes"
import scheduleRoutes from "./routes/schedules/schedules.routes"

const app = express()
app.use(express.json())

app.use('/', userRoutes)
app.use('/', categoryRoutes)
app.use('/', propertyRoutes)
app.use('/', scheduleRoutes)

app.use(handleErrorsMiddleware)

export default app