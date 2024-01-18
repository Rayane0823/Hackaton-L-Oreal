const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const productControllers = require("./controllers/productControllers");

router.get("/products", productControllers.getAllProducts);
router.get("/products/:id/seconds", productControllers.getSecondsProducts);
/* ************************************************************************* */

module.exports = router;
