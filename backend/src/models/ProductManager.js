const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "products" });
  }

  async readAllById(idProduct) {
    const [rows] = await this.database.query(
      `select second from ${this.table} where id = ?`,
      [idProduct]
    );

    return rows[0];
  }
}

module.exports = ProductManager;
