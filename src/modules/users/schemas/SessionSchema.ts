import { Segments, Joi, celebrate } from "celebrate";

export const sessionSchema = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }
})
