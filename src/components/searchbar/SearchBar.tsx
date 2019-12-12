import * as React from 'react';

import './SearchBar.css';
import SearchInput from '../searchInput/SearchInput';

export interface SearchBarProps {}

const SearchBar = (  ) => {
 return(
     <div>
      <SearchInput text="Palabras clave"/>
      <SearchInput text="Lugar"/>
      <SearchInput text="Deporte"/>
      <SearchInput text="Fecha"/>
     </div>
 )
}

export default SearchBar;