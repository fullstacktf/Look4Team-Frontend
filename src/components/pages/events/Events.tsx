import * as React from "react";
import styled from "@emotion/styled";
import Divider from "../../divider/Divider";
import Card from "../../card/Card";
import Button from "../../button/Button";

export interface EventsProps {}
const DIV = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`;
const Events: React.FC = () => {
  return (
    <DIV>
      <Button text="CREA UN EVENTO" />
      <Divider caso="events" />
      <Card name="Evento partido" photo="" content="Polideportivo" />
    </DIV>
  );
};

export default Events;
