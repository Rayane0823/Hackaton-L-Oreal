import "./ProductCard.scss";
import { useState } from "react";
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

  return (
    <div className="all_card">
      {API &&
        API.map((CardDecision, index) => {
          return (
            <div key={[index]}>
              <div className="Card">
                <img
                  className="imgcard"
                  src={CardDecision.Image}
                  alt="shampoing"
                />
                <h2 className="titlecard">{CardDecision.Titre}</h2>
                <p
                  onClick={() => handleClick(index)}
                  className={cardStates[index] ? "desc" : "click_desc"}
                  onKeyDown={() => handleClick(index)}
                  role="presentation"
                >
                  {cardStates[index]
                    ? CardDecision.description
                    : "clique pour une description"}
                </p>
                {cardStates[index] ? (
                  <div>
                    <a
                      className="linkloreal"
                      href="https://www.loreal-paris.fr/?&wiz_medium=cpc&wiz_source=google&wiz_campaign=oap_goog_ao_othr__bran_search_text_eg_fr__roas&gad_source=1&gclid=Cj0KCQiAtaOtBhCwARIsAN_x-3LZgHWOusXX-wpSeWR9TgvkjCsz_C2W31AcNbBxvAr0_etV7yQsJjgaAsguEALw_wcB&gclsrc=aw.ds"
                      alt="loreal"
                    >
                      Lien achat de la suggestion
                    </a>
                    <p className="price">20$</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProductCard;
