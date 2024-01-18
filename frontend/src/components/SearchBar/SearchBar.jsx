import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import List from "./List";
import data from "./ListData.json";
import "./SearchBar.scss";

function SearchBar() {
  const inputText = "";

  return (
    <div className="main">
      <div className="search">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          getOptionLabel={(option) => option.text}
          sx={{ width: 600 }}
          /* eslint-disable react/jsx-props-no-spreading */
          renderInput={(params) => <TextField {...params} label="Produits" />}
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchBar;
