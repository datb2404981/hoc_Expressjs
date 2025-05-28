import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

const creatNew = async (req, res, next) => {

  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required (trungquandev)',
      'string.empty': 'Title is not allowed to be empty (trungquandev)',
      'string.min': 'Title length must be at least 3 characters long (trungquandev)',
      'string.max': 'Title length must be less than or equal to 50 characters long (trungquandev)',
      'string.trim': 'Title must not have leading or trailing whitespace (trungquandev)'
    }),
    description: Joi.string().required().min(3).max(255).trim().strict()

  })

  try {
    console.log('req.body: ', req.body);
    // Chỉ định aborEarly: false để trường hợp có nhiều lỗi validation thì trả về tất cả lỗi
    await correctCondition.validateAsync(req.body, { abortEarly:  false });

    //next()
    res.status(StatusCodes.CREATED).json({ message: 'POST form Validation : API create new boards' });
  } catch (error) {
    console.log(error);
    console.log(new Error(error));
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message
    })
  }

}

export const boardValidation = {
  creatNew
}