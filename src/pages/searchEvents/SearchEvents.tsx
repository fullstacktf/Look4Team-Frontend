import * as React from "react";
import styled from "@emotion/styled";
import EventForm from "../../components/eventForm/EventForm";
import SearchBar from "../../components/searchBar/SearchBar";
import SearchDivider from "../../components/searchDivider/SearchDivider";
import SearchResult from "../../components/searchResult/SearchResult";
import SearchResults from "../../components/searchResults/SearchResults";

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
      <SearchDivider text="5 eventos en tu proximidad" />
      <SearchResults />
    </DIV>
  );
};

export default SearchEvents;
