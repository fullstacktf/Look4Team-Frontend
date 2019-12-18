import React, { FC } from "react";
import styled from '@emotion/styled';
import { friendList, FriendListInterface } from "./friendsList";

interface FriendsAvatarsProps {
  friends: FriendListInterface
}

export const FriendsAvatars: FC<FriendsAvatarsProps> = ({ friends }) => {
  return (
    <Container>

    </Container>
  );
};

const Container = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background: blue;
`