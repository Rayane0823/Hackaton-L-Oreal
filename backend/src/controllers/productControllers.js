const tables = require("../tables");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await tables.product.readAll();

    res.json(products);
  } catch (err) {
    next(err);
  }
};

const getSecondsProducts = async (req, res, next) => {
  try {
    const idProduct = req.params.id;
    const secondsProducts = await tables.ventes.readAllById(idProduct);
    res.json(secondsProducts);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getSecondsProducts,
};
