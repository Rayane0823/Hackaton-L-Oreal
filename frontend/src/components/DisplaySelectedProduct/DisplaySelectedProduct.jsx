import "./DisplaySelectedProduct.scss";
import shampoo from "../../assets/shampoo.png";

function DisplaySelectedProduct() {
  return (
    <div className="selected_product_container">
      <img
        src={shampoo}
        alt="Produit sélectionné"
        className="selected_product_image"
      />
      <h1 className="selected_product_title">Shampooing 1</h1>
    </div>
  );
}

export default DisplaySelectedProduct;
