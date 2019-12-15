import * as React from "react";
import styled from "@emotion/styled";
import Divider from "../../components/divider/Divider";
import Card from "../../components/card/Card";

export interface HomeProps {}

const DIV = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 75%;

  /* display: grid;
  grid-template: 1fr, 1fr, 1fr / 1fr, 1fr, 1fr, 1fr;
  column-gap: 20px;
  row-gap: 20px; */

  /* &:nth-child(1) {
    background-color: red;
  } */

  /* div {
    background-color: red;
  } */
`;

const Home: React.FC = () => {
  return (
    <DIV>
      <Divider caso="events" />
      <Card name="Partidito rapido" photo="" content="lugar: polideportivo " />
      <Divider caso="groups" />
      <Card name="Grupo look4" photo="" content="<<imagenes amigos>>" />
    </DIV>
  );
};

// {userList.ma<p(user <<=> <UserCard key={user.id} user={user} />)}

export default Home;
