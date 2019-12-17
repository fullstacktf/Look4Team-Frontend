import * as React from "react";

import "./SearchInput.css";

export interface SearchInputProps {
  text: string;
}

const SearchInput = props => {
  return (
    <div className="srch">
      <p>{props.text}</p>
      <input type="text" />
    </div>
  );
};

export default SearchInput;
