import * as React from "react";

import styled from "@emotion/styled";
import EventForm from "../../eventForm/EventForm";
export interface AddEventsProps {}
const DIV = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 75%;
  align-content: center;
`;
const AddEvents: React.FC = () => {
  return (
    <DIV>
      <EventForm />
    </DIV>
  );
};

export default AddEvents;
