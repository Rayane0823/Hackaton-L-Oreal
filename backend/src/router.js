const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const productControllers = require("./controllers/productControllers");

router.get("/products", productControllers.getAllProducts);
router.get("/products/:id/seconds", productControllers.getSecondsProducts);
/* ************************************************************************* */

module.exports = router;
