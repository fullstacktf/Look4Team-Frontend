import * as React from "react";

import styled from "@emotion/styled";
export interface SearchResultProps {
  contain: any;
}

const SearchResult: React.FC<SearchResultProps> = ({ contain }) => {
  return (
    <DIV>
      {/* <p>{contain.name}</p>
      <div>
        <img src={contain.image} alt="img" />
        <p>{contain.place}</p>
      </div>
      <hr /> */}

      <p>{contain.name}</p>
      <div>
        <img src={contain.image} alt="" />
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  img {
    width: 3em;
    height: 3em;
    border: 1px solid black;
    border-radius: 1px;
    margin: 0.4em;
  }
`;
export default SearchResult;
