import * as React from "react";

import styled from "@emotion/styled";
export interface SearchDividerProps {
  text: string;
}

const SearchDivider: React.FC<SearchDividerProps> = ({ text }) => {
  return (
    <DIV>
      <div>
        <p> {text}</p>
      </div>
      <hr />
    </DIV>
  );
};

const DIV = styled.div`
  div:nth-child(1) {
    display: flex;
    p {
      font-weight: bold;
      margin: 0;
      margin-top: 40px;
    }
  }

  div:nth-child(2) {
    margin-left: auto;
    padding-top: 40px;
  }
`;
export default SearchDivider;
