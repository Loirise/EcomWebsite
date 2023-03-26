const { productSchema } = require('../joiSchemas');

const validateProduct = (req, res, next) => {
    const {error} = productSchema.validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    } else {
        next();
    }
}

module.exports = validateProduct;

