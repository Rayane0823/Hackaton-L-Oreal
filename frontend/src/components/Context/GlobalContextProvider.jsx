import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [selectedValue, setSelectedValue] = useState(null);
  const [secondProductArray, setSecondProductArray] = useState([]);
  const [similarProduct, setSimilarProduct] = useState([]);
  const [cardStates, setCardStates] = useState();
  const contextValue = useMemo(() => {
    return {
      selectedValue,
      setSelectedValue,
      secondProductArray,
      setSecondProductArray,
      similarProduct,
      setSimilarProduct,
      cardStates,
      setCardStates,
    };
  }, [
    selectedValue,
    setSelectedValue,
    secondProductArray,
    setSecondProductArray,
    cardStates,
    setCardStates,
  ]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}
export { GlobalContextProvider, useGlobalContext };

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
