import * as React from "react";
import styled from "@emotion/styled";
import PageWrapper from "../pageWrapper/PageWrapper";
import Divider from "../divider/Divider";
import "./Home.css";

export interface HomeProps {}

const HomeWrapperCSS = styled.div`
  margin-left: 161px;
  margin-right: 161px;
  display: grid;
  grid-template: 1fr, 1fr, 1fr / 1fr, 1fr, 1fr, 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;

const Home = () => {
  return (
    <HomeWrapperCSS>
      <h1>esto sera el home</h1>;
    </HomeWrapperCSS>
  );
};

export default Home;
