import "./DisplaySelectedProduct.scss";
import shampoo from "../../assets/shampoo.png";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function DisplaySelectedProduct() {
  const { selectedValue } = useGlobalContext();
  return (
    selectedValue && (
      <div className="selected_product_container">
        <img
          src={shampoo}
          alt="Produit sélectionné"
          className="selected_product_image"
        />
        <h1 className="selected_product_title">Shampooing 1</h1>
      </div>
    )
  );
}

export default DisplaySelectedProduct;
