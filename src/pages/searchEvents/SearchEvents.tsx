import * as React from "react";
import styled from "@emotion/styled";
import EventForm from "../../components/eventForm/EventForm";

const DIV = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 75%;
`;

export interface SearchEventsProps {}

const SearchEvents: React.FC = () => {
  return (
    <DIV>
      <EventForm />
    </DIV>
  );
};

export default SearchEvents;
