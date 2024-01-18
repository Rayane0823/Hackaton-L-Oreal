import "./ProductCard.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../../../backend/src/api.json";

function ProductCard() {
  const [cardStates, setCardStates] = useState(API.map(() => false));

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

  return (
    <div className="all_card">
      {API &&
        API.map((CardDecision, index) => {
          return (
            <div key={[index]} className="Card">
              <h2 className="titlecard">{CardDecision.Titre}</h2>
              <img className="imgcard" src="src/assets/0.png" alt="shampoing" />

              <button className="button__desc" type="button" onClick={hClick}>
                Plus de détails
              </button>
              <div className={open ? "desc" : "desc-hidden"}>
                <p className="desc_text">
                  <b>Type:</b> shampooing
                </p>
                <p className="desc_text">
                  <b>Description: </b>Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Accusantium voluptatum culpa repudiandae!
                  Pariatur odit temporibus.
                </p>
                <p className="desc_text">Shampoing pour cheveux secs</p>
                <p className="price">20€</p>
                {cardStates[index] && CardDecision.description}
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

export default ProductCard;
