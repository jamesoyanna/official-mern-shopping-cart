const express = require('express');
const router = express.Router();
const {  getAllProducts, getProductById } = require('../controller/productControllers');

// Description: Get All products  from Database.
//Get api/products
// Access public
router.get("/", getAllProducts);

// Description: Get a single product  from Database.
//Get api/products/:id
// Access public
router.get("/:id", getProductById);

module.exports = router;