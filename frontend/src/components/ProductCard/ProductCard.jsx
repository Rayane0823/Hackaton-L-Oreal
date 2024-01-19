import "./ProductCard.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../../backend/src/api.json";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function ProductCard() {
  const [cardStates, setCardStates] = useState(API.map(() => false));
  const { similarProduct, allProducts } = useGlobalContext();

  const handleClick = (index) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const secondProductsLink = similarProduct.map((secondProduct) => {
    const secondProductsInfos = allProducts.find(
      (product) => product.ProductID === secondProduct
    );

    if (secondProductsInfos) {
      return {
        name: secondProductsInfos.Item_Purchased,
        brand: secondProductsInfos.Brand,
        type: secondProductsInfos.Category_y,
        description: secondProductsInfos.Description,
        price: secondProductsInfos.Price,
        quantity: secondProduct.nombre_d_achats,
        src: secondProductsInfos.image_link,
      };
    }
    return {
      name: "toto",
      brand: "toto",
      type: "toto",
      description: "toto",
      price: "toto",
      quantity: "toto",
      src: "toto",
    };
  });
  if (secondProductsLink === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div className="all_card">
      {secondProductsLink.length > 0 ? (
        secondProductsLink.map((e, index) => (
          <div key={e.name} className="Card">
            <h2 className="titlecard">{e.name}</h2>
            <img
              className="imgcard"
              src={`../../../${e.src}`}
              alt="shampoing"
            />

            <button
              className="button__desc"
              type="button"
              onClick={() => handleClick(index)}
            >
              Plus de détails
            </button>
            <div className={cardStates[index] ? "desc" : "desc-hidden"}>
              <p className="desc_text">
                <b>Type:</b> {e.type}
              </p>
              <p className="desc_text">
                <b>Description: </b>
                {e.description}
              </p>
              {/* <p className="desc_text">Shampoing pour cheveux secs</p> */}
              <p className="price">{e.price}</p>
              <Link
                to="https://www.loreal-paris.fr/?&wiz_medium=cpc&wiz_source=google&wiz_campaign=oap_goog_ao_othr__bran_search_text_eg_fr__roas&gad_source=1&gclid=Cj0KCQiAtaOtBhCwARIsAN_x-3LZgHWOusXX-wpSeWR9TgvkjCsz_C2W31AcNbBxvAr0_etV7yQsJjgaAsguEALw_wcB&gclsrc=aw.ds"
                className="linkloreal"
                alt="loreal"
              >
                Lien du site marchand
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No similar products found.</p>
      )}
    </div>
  );
}

export default ProductCard;
