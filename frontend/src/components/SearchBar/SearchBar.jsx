import * as React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./SearchBar.scss";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function SearchBar({ UniqueProduct }) {
  const { selectedValue, setSelectedValue } = useGlobalContext();
  console.info(selectedValue);
  const handleChange = (newValue) => {
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
          /* eslint-disable react/jsx-props-no-spreading */
          renderInput={(params) => (
            <TextField
              {...params}
              label="Produits"
              className="list__products"
            />
          )}
        />
      </div>
    </div>
  );
}
SearchBar.propTypes = {
  UniqueProduct: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchBar;
