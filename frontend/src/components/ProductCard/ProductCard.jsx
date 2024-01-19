import "./ProductCard.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function ProductCard({ name, type, description, price }) {
  const { secondProductArray, setCardStates } = useGlobalContext();

  const handleClick = (index) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  console.info(handleClick);

  const [open, setIsOpen] = useState(false);

  const hClick = () => {
    setIsOpen(!open);
  };

  const uniqueProducts = Array.from(
    new Set(secondProductArray.map((product) => product.id))
  );
  return (
    <div className="all_card">
      {uniqueProducts.map((productId) => {
        const CardDecision = secondProductArray.find(
          (product) => product.id === productId
        );
        return (
          <div key={CardDecision.id} className="Card">
            <h2 className="titlecard">{name}</h2>
            <img className="imgcard" src="src/assets/0.png" alt="shampoing" />
            <button className="button__desc" type="button" onClick={hClick}>
              Plus de détails
            </button>
            <div className={open ? "desc" : "desc-hidden"}>
              <p className="desc_text">
                <b>Type:</b> {type}
              </p>
              <p className="desc_text">
                <b>Description: </b>
                {description}
              </p>
              <p className="price">{price}$</p>
              {open && CardDecision.description}
              <Link
                to="https://www.loreal-paris.fr/?&wiz_medium=cpc&wiz_source=google&wiz_campaign=oap_goog_ao_othr__bran_search_text_eg_fr__roas&gad_source=1&gclid=Cj0KCQiAtaOtBhCwARIsAN_x-3LZgHWOusXX-wpSeWR9TgvkjCsz_C2W31AcNbBxvAr0_etV7yQsJjgaAsguEALw_wcB&gclsrc=aw.ds"
                className="linkloreal"
                alt="loreal"
              >
                Lien du site marchand
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
