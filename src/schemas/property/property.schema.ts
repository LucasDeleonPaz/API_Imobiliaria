import  * as yup  from "yup"
import { SchemaOf } from "yup"
import { IPropertyRequest, IAddressRequest } from "../../interfaces/properties"

const propertySchema : SchemaOf<IPropertyRequest | object > = yup.object().shape({
    value: yup.number().required(),
    size: yup.number().required(),
    address: yup.object().required(),
    categoryId: yup.string().required()
})

const addressSchema : SchemaOf<IAddressRequest> = yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().required(),
    number: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
})


export { propertySchema }