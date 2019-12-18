import * as React from "react";
import styled from "@emotion/styled";
import Divider from "../../components/divider/Divider";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";

export interface EventsProps {}
const DIV = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 75%;

  .buttons {
    text-align: center;
  }

  button {
    margin-left: 2em;
  }
`;
const Events: React.FC = () => {
  return (
    <div>
      <DIV>
        <div className="buttons">
          <a href="events/add">
            <Button text="CREA UN EVENTO" />
          </a>
          <a href="events/search">
            <Button text="BUSCA UN EVENTO" />
          </a>
        </div>
        <Divider caso="events" url="https://look4.team/api/events" />
      </DIV>
    </div>
  );
};

export default Events;
