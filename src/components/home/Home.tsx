import * as React from "react";
import styled from "@emotion/styled";
import PageWrapper from "../pageWrapper/PageWrapper";
import Divider from "../divider/Divider";
import CancelButton from "../cancelButton/CancelButton";
import SearchInput from "../searchInput/SearchInput";

export interface HomeProps {}

const Home = () => {
  return (
    <HomeWrapper>
      <SearchInput text="Palabras Clave"/>
      <CancelButton/> 
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
