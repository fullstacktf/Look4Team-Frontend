import * as React from "react";
import styled from "@emotion/styled";
<<<<<<< HEAD
=======
import PageWrapper from "../pageWrapper/PageWrapper";
>>>>>>> 2bde0c24bef634d4c0ea866793f8137a99db6d60
import Divider from "../divider/Divider";
import CancelButton from "../cancelButton/CancelButton";
import SearchInput from "../searchInput/SearchInput";

export interface HomeProps {}

const Home = () => {
  return (
    <HomeWrapper>
<<<<<<< HEAD
      <SearchInput text="Palabras Clave" />
      <CancelButton />
=======
      <SearchInput text="Palabras Clave"/>
      <CancelButton/> 
>>>>>>> 2bde0c24bef634d4c0ea866793f8137a99db6d60
      test
      {/* <Divider title="titulo" /> */}
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  margin-left: 161px;
  margin-right: 161px;
  display: grid;
  /* rows / columns */
  grid-template: 1fr, 1fr, 1fr / 1fr, 1fr, 1fr, 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;
export default Home;
