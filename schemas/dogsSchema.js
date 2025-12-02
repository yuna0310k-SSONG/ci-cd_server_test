import Joi from "joi";

// POST 요청용 스키마 (모든 필드 필수)
export const dogSchema = Joi.object({
  name: Joi.string().min(1).required(),
  breed: Joi.string().min(1).required(),
  age: Joi.number().integer().min(0).required(),
});

// PUT 요청용 스키마 (일부 필드만 허용)
export const dogUpdateSchema = Joi.object({
  name: Joi.string().min(1),
  breed: Joi.string().min(1),
  age: Joi.number().integer().min(0),
});
