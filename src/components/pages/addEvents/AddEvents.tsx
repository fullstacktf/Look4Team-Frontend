import * as React from "react";

import styled from "@emotion/styled";
import EventForm from "../../eventForm/EventForm";
export interface AddEventsProps {}
const DIV = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 75%;
`;
const AddEvents: React.FC = () => {
  return (
    <DIV>
      <EventForm />
    </DIV>
  );
};

export default AddEvents;
