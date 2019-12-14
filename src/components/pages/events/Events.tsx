import * as React from "react";
import styled from "@emotion/styled";
import Divider from "../../divider/Divider";
import Card from "../../card/Card";
import Button from "../../button/Button";

export interface EventsProps {}
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
const Events: React.FC = () => {
  return (
    <DIV>
      <div>
        <Button link="add/events" text="CREA UN EVENTO" />
        <Button link="search/events" text="BUSCA UN EVENTO" />
      </div>
      <Divider caso="events" />
      <Card name="Evento partido" photo="" content="Polideportivo" />
    </DIV>
  );
};

export default Events;
