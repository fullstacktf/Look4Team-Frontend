import * as React from "react";
import styled from "@emotion/styled";
import EventForm from "../../components/eventForm/EventForm";
import SearchBar from "../../components/searchBar/SearchBar";

const DIV = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 75%;
`;

export interface SearchEventsProps {}

const SearchEvents: React.FC = () => {
  return (
    <DIV>
      <SearchBar />
    </DIV>
  );
};

export default SearchEvents;
