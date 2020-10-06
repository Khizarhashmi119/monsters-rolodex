import React from "react";

import "./search-field.style.css";

const SearchField = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    autoFocus
  />
);

export default SearchField;
