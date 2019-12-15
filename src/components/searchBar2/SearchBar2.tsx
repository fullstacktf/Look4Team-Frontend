import * as React from "react";

import styled from "@emotion/styled";
import { useState } from "react";
export interface SearchBar2Props {}

const SearchBar2: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [sortedEvents, setSortedEvents] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [filterBySport, setFilterBySport] = useState("");
  const [filterByPlace, setFilterByPlace] = useState("");
  const [filterByDate, setFilterByDate] = useState("");

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    let result = [...events];

    if (searchWord) {
      const wordRegex = new RegExp(`${searchWord}`, "gi");
      result = result.filter(event => wordRegex.test(event.description));
    }

    if (filterByDate) {
      result = result.filter(event => event.date === filterByDate);
    }

    if (filterByPlace) {
      const placeRegex = new RegExp(`${filterByPlace}`, "gi");
      result = result.filter(event => placeRegex.test(event.place));
    }

    setSortedEvents(result);
  }, [searchWord, events, filterByDate, filterByPlace]);
  return (
    <div>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filterByType={filterByType}
        setFilterByType={setFilterByType}
        filterByYear={filterByYear}
        setFilterByYear={setFilterByYear}
      />
      {sortedEvents.length > 0 ? (
        sortedEvents.map((event, index) => {
          return <Event key={index} event={event} />;
        })
      ) : (
        <span></span>
      )}
    </div>
  );
};

// const [searchTerm, setSearchTerm] = React.useState("");
// const [searchResults, setSearchResults] = React.useState([]);
// const handleChange = event => {
//    setSearchTerm(event.target.value);
//  };
// React.useEffect(() => {
//    const results = people.filter(person =>
//      person.toLowerCase().includes(searchTerm)
//    );
//    setSearchResults(results);
//  }, [searchTerm]);
export default SearchBar2;
