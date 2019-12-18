import React, { FC } from "react";
import styled from '@emotion/styled';
import { friendList, FriendListInterface } from "./friendsList";

interface FriendsAvatarsProps {
  friends: FriendListInterface
}

export const FriendsAvatars: FC<FriendsAvatarsProps> = ({ friends }) => {
  return (
    <Container>
      <img src={friends.avatar} alt="avatar" title={friends.name} width="100%" height="100%" />
    </Container>
  );
};

const Container = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
margin-left: 3px;
margin-bottom: 5px;
overflow:hidden;

`