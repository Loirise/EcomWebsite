const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const isLoggedIn = require('../middleware/isLoggedIn');

/* show all */
router.get('/', async (req, res) => {
    let products;
    try {
        products = await Product.find().limit(10);
    } catch(e) {
        return res.status(500).send('Something went wrong.')
    }
    res.status(200).json(products);
});

/* create new */
router.post('/', isLoggedIn, async (req, res) => {
    let newProduct;
    try {
        newProduct = new Product(req.body.product);
        await newProduct.save()
    } catch (e) {
        return res.status(400).send('Could not create new product.')
    }
    res.status(201).json(newProduct);
})

/* show one */
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    let product;
    try {
        product = await Product.findById(id);
    } catch {
        return res.status(400).send('Product with such ID not found.');
    }
    res.status(200).json(product);
})

/* update one */
router.put('/:id', isLoggedIn, async (req, res) => {
    const id = req.params.id;
    let editedProduct;
    try {
        editedProduct = await Product.findByIdAndUpdate(id, {...req.body.product})
    } catch(e) {
        return res.status(400).send('Could not update product.');
    }
    res.status(200).json(editedProduct);
})

/* delete one */
router.get('/:id', isLoggedIn, async (req, res) => {
    const id = req.params.id;
    let deletedProduct;
    try {
        deletedProduct = await Product.findByIdAndDelete(id);
    } catch(e) {
        res.status(400).send('Could not delete product.')
    }
    res.status(200).json(deletedProduct);
})

module.exports = router;


/* 
{ 
    "product": 
    {
        "name": "new product pro",
        "line": "new product",
        "scale": "1:8",
        "vendor": "new vendor",
        "description": "random desc",
        "quantity": 11,
        "price": 9.99
    }
}
*/