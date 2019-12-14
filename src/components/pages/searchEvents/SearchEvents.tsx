import * as React from "react";
import styled from "@emotion/styled";
import SignIn from "../../signIn/SignIn";

const DIV = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`;

export interface SearchEventsProps {}

const SearchEvents: React.FC = () => {
  return (
    <DIV>
      PAGINA BUSCAR EVENTOS
      <SignIn />
    </DIV>
  );
};

export default SearchEvents;
