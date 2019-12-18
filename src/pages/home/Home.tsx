import * as React from "react";
import styled from "@emotion/styled";
import Divider from "../../components/divider/Divider";
import { CalendarMini } from "../../components/calendar/calendar";


export interface HomeProps { }

const Container = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 75%;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <CalendarMini />
      <Divider caso="events" url="https://look4.team/api/events" />
      <Divider caso="groups" url="" />
    </Container>
  );
};

// {userList.ma<p(user <<=> <UserCard key={user.id} user={user} />)}

export default Home;
