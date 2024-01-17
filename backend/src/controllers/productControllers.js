const tables = require("../tables");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await tables.product.readAll();

    res.json(products);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
};
