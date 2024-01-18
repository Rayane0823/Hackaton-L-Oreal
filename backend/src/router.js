const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const productControllers = require("./controllers/productControllers");
const mlConfig = require("./controllers/ML");

router.get("/products", productControllers.getAllProducts);
router.get("/products/:id/seconds", productControllers.getSecondsProducts);
router.get("/products/ml", mlConfig);
/* ************************************************************************* */

module.exports = router;
