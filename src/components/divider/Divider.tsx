import * as React from "react";
import Icon from "../icon/Icon";
import styled from "@emotion/styled";
import Cards from "../cards/Cards";
import { GroupCards } from "../groupsCards/groupCards";
import { FriendsAvatars } from "../friendsAvatar/friendsAvatars";
import { friendList } from "../friendsAvatar/friendsList";

export interface DividerContainerProps {
  caso: string;
  url: string;
}
//events, groups, friends

const Divider: React.FC<DividerContainerProps> = ({ caso }) => {
  switch (caso) {
    case "events":
      return (
        <Container>
          <TitleDivider>
            <p> Tus eventos </p>
            <div>
              <a href="/search/events">
                <Icon icon="search" />
              </a>
              <a href="/add/events">
                <Icon icon="add" />
              </a>
            </div>
          </TitleDivider>
          <Cards />
        </Container>
      );
    case "groups":
      return (
        <Container>
          <TitleDivider>
            <p> Tus grupos </p>
            <div>
              <a href="/search/groups">
                <Icon icon="search" />
              </a>
              <a href="/add/groups">
                <Icon icon="add" />
              </a>
            </div>
          </TitleDivider>
          <ContainerCardsGroups>
            <GroupCards />
          </ContainerCardsGroups>
        </Container>
      );

    case "friends":
      return (
        <FriendsContainer>
          <TitleDivider>
            <p> Amigos </p>
            <div>
              <a href="/search/users">
                <Icon icon="search" />
              </a>
              <a href="/add/users">
                <Icon icon="add" />
              </a>
            </div>
          </TitleDivider>
          <AvatarContainer>
            {friendList &&
              friendList.map(friend => (
                <FriendsAvatars friends={friend} key={friend.name} />
              ))}
          </AvatarContainer>
        </FriendsContainer>
      );
    default:
      return <p>nada</p>;
  }
};

export default Divider;

const ContainerCardsGroups = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const TitleDivider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  margin-bottom: 5px;

  & p {
    font-size: 1rem;
    font-weight: bolder;
    margin-left: 10px;
  }

  & a {
    margin-right: 10px;
  }
`;

const FriendsContainer = styled.div`
  width: 40%;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
