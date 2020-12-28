const Joi = require("joi");

const postDataValidator = (data) => {
    const schema = Joi.object({
        userName: Joi.string().min(4).required(),
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2),
        createdAt: Joi.string().min(4),
        updateAt: Joi.string().min(8),
        isActive: Joi.boolean(),
    });

    return schema.validate(data);
};
module.exports.postDataValidator = postDataValidator;