import { Request, Response } from "express"
import createPropertyService from "../../services/properties/createProperty.service"


const createPropertiesController = async (req: Request, res: Response) => {

    const newProperty = await createPropertyService(req.body)
    return res.status(201).json(newProperty)
    
}

export default createPropertiesController


