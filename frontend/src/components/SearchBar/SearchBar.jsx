import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./SearchBar.scss";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function SearchBar({ UniqueProduct }) {
  const { selectedValue, setSelectedValue, setSecondProductArray } =
    useGlobalContext();
  useEffect(() => {
    const sendToBack = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/${selectedValue.id}/seconds`,
          {
            method: "GET",
          }
        );
        console.info("In try spec");
        setSecondProductArray(response.body);
      } catch (error) {
        console.error("coucou");
      }
    };

    sendToBack(selectedValue);
  }, [selectedValue]);
  // console.log(secondProductArray);

  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
  };
  // console.log(selectedValue);
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
