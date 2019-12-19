import * as React from "react";
import styled from "@emotion/styled";
import Divider from "../../components/divider/Divider";
<<<<<<< HEAD
import Card from "../../components/card/Card";
=======
import { CalendarMini } from "../../components/calendar/calendar";
>>>>>>> pre-develop


export interface HomeProps { }

const Container = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 75%;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <TopContainer>
        <CalendarMini />
        <Divider caso="friends" url="" />
      </TopContainer>
      <Divider caso="events" url="https://look4.team/api/events" />
      <Divider caso="groups" url="" />
    </Container>
  );
};

// {userList.ma<p(user <<=> <UserCard key={user.id} user={user} />)}

export default Home;

const TopContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
`