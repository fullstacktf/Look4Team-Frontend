import React, { FC } from "react";
import { GroupCardsList } from "./groupsCardList";
import { GroupCard } from "./groupCard";

interface GroupCardsProps {}

export const GroupCards: FC<GroupCardsProps> = () => {
  return (
    <>
      {GroupCardsList &&
        GroupCardsList.map(card => <GroupCard group={card} key={card.name} />)}
    </>
  );
};
