const Joi = require('joi');

module.exports.productSchema = Joi.object({
    product: Joi.object({
        name: Joi.string().required().max(80),
        line: Joi.string().required().max(40),
        scale: Joi.string().required(),
        vendor: Joi.string().required().max(40),
        description: Joi.string().required().max(400),
        quantity: Joi.number().required().integer().positive(),
        price: Joi.number().required().precision(2)
    }).required()
})