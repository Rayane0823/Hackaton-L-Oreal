import * as React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./SearchBar.scss";

function SearchBar({ UniqueProduct }) {
  return (
    <div className="main">
      <div className="search">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={UniqueProduct}
          getOptionLabel={(option) => option}
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
