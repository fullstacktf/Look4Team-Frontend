import * as React from "react";
import styled from "@emotion/styled";
import Divider from "../../components/divider/Divider";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";

export interface GroupsProps {}
const DIV = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 75%;

  div:nth-child(1) {
    text-align: center;
  }

  button {
    margin-left: 2em;
  }
`;

const Groups = () => {
  return (
    <DIV>
      <div>
        <a href="add/groups">
          <Button text="CREA UN GRUPO" />
        </a>
        <a href="search/groups">
          <Button text="BUSCA UN GRUPO" />
        </a>
      </div>

      {/* <Divider caso="groups" /> */}
      {/* <Card name="Grupito guay" photo="" content="<<amigos>>" /> */}
    </DIV>
  );
};

export default Groups;
