import "./DisplaySelectedProduct.scss";

function DisplaySelectedProduct() {
  return (
    <div className="selected_product_container">
      <img
        src="https://media.carrefour.fr/medias/c552426816b0317ab53ca2a0c189704f/p_540x540/03600542418812-a1n1-s01.jpg"
        alt="Produit sélectionné"
        className="selected_product_image"
      />
      <div className="select_product_text">
        <h1 className="selected_product_title">Shampooing 1</h1>
        <p className="selected_product_paragraph">
          Shampooing au bifidus actif, il sent hyper bon.
        </p>
      </div>
    </div>
  );
}

export default DisplaySelectedProduct;
