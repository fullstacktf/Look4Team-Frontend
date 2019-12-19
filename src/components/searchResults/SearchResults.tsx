import * as React from "react";
import Request from "superagent";
import { useState, useEffect } from "react";
import { EventCard } from "../../services/events/models";

import styled from "@emotion/styled";
import SearchResult from "../searchResult/SearchResult";

export interface SearchResultProps {
  initialEvents?: EventCard[];
}

const DIV = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SearchResults: React.FC<SearchResultProps> = ({ initialEvents = [] }) => {
  const [resultList, setResultList] = useState<EventCard[]>(initialEvents);

  useEffect(() => {
    Request.get("https://look4.team/api/events")
      .then(events => setResultList(events.body))
      .catch(err => console.log("ha sucedido un error", err));
  });

  return (
    <DIV>
      {resultList &&
        resultList.map(event => (
          <SearchResult key={event._id} contain={event} />
        ))}
    </DIV>
  );
};

export default SearchResults;
