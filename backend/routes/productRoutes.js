const express = require("express");
const router = express.Router();

const {getAllProducts, getProductById} = require("../controllers/productControllers");

//@desc: ini digunakan untuk mengambil seluruh produk dari database 
//@Route: GET /api/products
//@access: Public
router.get("/", getAllProducts);

//@desc: ini digunakan untuk mengambil seluruh produk dari  berdasarkan iddatabase 
//@Route: GET /api/products/:id
//@access: Public
router.get("/:id", getProductById);

module.exports = router;