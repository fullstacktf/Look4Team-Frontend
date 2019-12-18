import React, { FC } from "react";
import styled from '@emotion/styled';
import { GroupCardsList } from "./groupsCardList";
import { GroupCard } from "./groupCard";

interface GroupCardsProps {

}

export const GroupCards: FC<GroupCardsProps> = (props) => {
  return (
    <>
      {GroupCardsList && GroupCardsList.map(card => <GroupCard group={card} />)}
    </>
  );
};