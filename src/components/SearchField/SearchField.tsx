import React from "react";

import "./SearchField.css";

interface Props {
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchField = ({ placeholder, handleChange }: Props): JSX.Element => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    autoFocus
  />
);

export default SearchField;
