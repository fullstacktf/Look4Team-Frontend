import * as React from "react";
import styled from "@emotion/styled";
import Divider from "../../divider/Divider";
import Card from "../../card/Card";
import Button from "../../button/Button";

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
        <Button link="add/groups" text="CREA UN GRUPO" />
        <Button link="search/groups" text="BUSCA UN GRUPO" />
      </div>

      <Divider caso="groups" />
      <Card name="Grupito guay" photo="" content="<<amigos>>" />
    </DIV>
  );
};

export default Groups;
