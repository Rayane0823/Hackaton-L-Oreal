const tables = require("../tables");

const getSecondsProducts = async (req, res, next) => {
  try {
    const idProduct = req.params.id;
    const secondsProducts = await tables.products.readAllById(idProduct);

    res.json(secondsProducts);
  } catch (err) {
    next(err);
  }
};

module.exports = getSecondsProducts;
