import * as React from "react";
import styled from "@emotion/styled";
import Divider from "../../divider/Divider";
import Card from "../../card/Card";

export interface GroupsProps {}
const DIV = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`;
const Groups = () => {
  return (
    <DIV>
      <Divider caso="groups" />
      <Card name="Grupito guay" photo="" content="<<amigos>>" />
    </DIV>
  );
};

export default Groups;
