import Joi from "joi";

export const tagSchema  = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().max(50).required()
})
