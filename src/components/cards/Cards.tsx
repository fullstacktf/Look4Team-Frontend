import * as React from "react";
import styled from "@emotion/styled";
import { EventCard } from "../../services/events/models";
import Card from "../card/Card";
import Request from "superagent";
import { useState, useEffect } from "react";

export interface CardsProps {
  initialEvents?: EventCard[];
}
const DIV = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Cards: React.FC<CardsProps> = ({ initialEvents = [] }) => {
  //   const [events, setEvents] = useState<EventCard[]>(initialEvents);
  const [eventList, setEventList] = useState<EventCard[]>(initialEvents);

  useEffect(() => {
    Request.get("https://look4.team/api/events")
      .then(events => setEventList(events.body))
      .catch(err => console.log("ha sucedido un error", err));
  });

  return (
    <DIV>
      {eventList &&
        eventList.map(event => <Card key={event._id} contain={event} />)}
    </DIV>
  );
};

export default Cards;
