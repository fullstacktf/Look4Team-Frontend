import React, { FC } from "react";
import styled from "@emotion/styled";
import { GroupCardInterface } from "./groupsCardList";
import { FriendsAvatars } from "../friendsAvatar/friendsAvatars";
import { friendList } from "../friendsAvatar/friendsList";

interface GroupCardProps {
  group: GroupCardInterface;
}

export const GroupCard: FC<GroupCardProps> = ({ group }) => {
  return (
    <Container>
      <Title>
        <h4>{group.name}</h4>
      </Title>
      <BodyCard>
        <img src={group.image} alt="imgagen" width="50px" height="50px" />
        <AvatarsContainer>
          {friendList &&
            friendList.map(friend => (
              <FriendsAvatars friends={friend} key={friend.name} />
            ))}
        </AvatarsContainer>
      </BodyCard>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  margin-right: 8px;
  border-radius: 3px;
  border: 1px solid grey;
`;
const Title = styled.div`
  border-bottom: 1px solid grey;

  & h4 {
    margin: 0px;
    padding: 5px 8px 5px 5px;
  }
`;

const BodyCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
const AvatarsContainer = styled.div`
  margin-left: 8px;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
`;
