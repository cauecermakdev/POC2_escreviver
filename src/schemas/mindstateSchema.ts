import Joi from "joi";

export const mindstateSchema  = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().max(50).required()
})
