const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "ventes" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readAllById(idProduct) {
    const [rows] = await this.database.query(
      `WITH ventes_ciblees AS(
        SELECT distinct(vente_ID)
        FROM ventes
        WHERE ProductID = ?)
    SELECT ProductID, COUNT(*) AS nombre_d_achats
    FROM ventes
    WHERE vente_ID IN (SELECT vente_ID FROM ventes_ciblees) 
        AND NOT ProductID = ?
    GROUP BY ProductID
    ORDER BY nombre_d_achats DESC;`,
      [idProduct, idProduct]
    );
    return rows;
  }
}

module.exports = ProductManager;
