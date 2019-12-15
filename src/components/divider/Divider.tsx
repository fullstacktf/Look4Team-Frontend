import * as React from "react";
import Icon from "../icon/Icon";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { EventCards } from "../../services/events/services";
import { EventCard } from "../../services/events/models";
import Card from "../card/Card";

const DIV = styled.div`
  display: flex;

  div {
    margin-left: auto;
    padding-top: 40px;
  }

  svg {
    padding-left: 10px;
  }
  p {
    margin: 0;
    margin-top: 40px;
    font-family: "roboto";
  }
`;

export interface DividerContainerProps {
  caso: string;
  initialEvents?: EventCard[];
  url: string;
}
//events, groups, friends

const Divider: React.FC<DividerContainerProps> = ({ caso, initialEvents = [], url }) => {
  const [events, setEvents] = useState<EventCard[]>(initialEvents);
  const [eventList, setEventList] = useState(); 

useEffect(()=> {
  EventCards.getAll().then(events => setEventList(events)).catch(err => console.log("ha sucedido un error", err));

}, [url]);

  switch (caso) {
    case "events":  
      return (
        <div>
          <DIV>
            <p> Tus eventos </p>
            <div>
              <a href="/search/events">
                <Icon icon="search" />
              </a>
              <a href="/add/events">
                <Icon icon="add" />
              </a>
            </div>
          </DIV>
          <hr />
      
          {eventList && eventList.map(event => (<Card key={event.id} contain={event}/>))}
          
        </div>
      );
    case "groups":
      return (
        <div>
          <DIV>
            <p> Tus grupos </p>
            <div>
              <a href="/search/groups">
                <Icon icon="search" />
              </a>
              <a href="/add/groups">
                <Icon icon="add" />
              </a>
            </div>
          </DIV>
          <hr />
        </div>
      );

    case "friends":
      return (
        <div>
          <DIV>
            <p> Amigos </p>
            <div>
              <a href="/search/users">
                <Icon icon="search" />
              </a>
              <a href="/add/users">
                <Icon icon="add" />
              </a>
            </div>
          </DIV>
          <hr />
        </div>
      );
    default:
      return <p>nada</p>;
  }
};

export default Divider;
