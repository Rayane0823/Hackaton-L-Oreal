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
                <h2>{CardDecision.Titre}</h2>
                <img src={CardDecision.Image} alt="shampoing" />
                <p
                  onClick={() => handleClick(index)}
                  className="click_desc"
                  onKeyDown={() => handleClick(index)}
                  role="presentation"
                >
                  {cardStates[index]
                    ? CardDecision.description
                    : "clique pour une description"}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProductCard;
