import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./SearchBar.scss";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function SearchBar({ UniqueProduct }) {
  const {
    selectedValue,
    setSelectedValue,
    setSecondProductArray,
    setSimilarProduct,
  } = useGlobalContext();

  useEffect(() => {
    const sendToBack = async () => {
      try {
        const secondsResponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/${
            selectedValue.id
          }/seconds`
        );
        const mlResponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/${
            selectedValue.id
          }/ml`
        );

        if (!secondsResponse.ok || !mlResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const secondsData = await secondsResponse.json();
        const mlData = await mlResponse.json();

        setSecondProductArray(secondsData);
        setSimilarProduct(mlData);
      } catch (error) {
        console.error("An error occurred:", error.message);
      }
    };

    if (selectedValue) {
      sendToBack();
    }
  }, [selectedValue]);

  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <div className="main">
      <div className="search">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={UniqueProduct}
          onChange={handleChange}
          getOptionLabel={(option) => option.name}
          sx={{ width: 250 }}
          /* eslint-disable react/jsx-props-no-spreading */
          renderInput={(params) => <TextField {...params} label="Produits" />}
        />
      </div>
    </div>
  );
}
SearchBar.propTypes = {
  UniqueProduct: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchBar;
