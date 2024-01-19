import "./DisplaySelectedProduct.scss";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function DisplaySelectedProduct() {
  const { selectedValue, allProducts } = useGlobalContext();

  const selectedProductInfos = selectedValue
    ? allProducts.find((product) => product.ProductID === selectedValue.id)
    : null;

  if (selectedProductInfos) {
    // eslint-disable-next-line camelcase, no-unused-vars
    const { Item_Purchased, image_link } = selectedProductInfos;
  }

  return (
    selectedValue && (
      <div className="selected_product_container">
        <img
          src={`../../../${selectedProductInfos.image_link}`}
          alt="Produit sélectionné"
          className="selected_product_image"
        />
        <h1 className="selected_product_title">
          {selectedProductInfos.Item_Purchased}
        </h1>
      </div>
    )
  );
}

export default DisplaySelectedProduct;
