import Joi from "joi";

export const noteValidator = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    content: Joi.string().min(3).required(),
})
