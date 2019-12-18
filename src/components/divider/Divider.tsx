import * as React from "react";
import Icon from "../icon/Icon";
import styled from "@emotion/styled";
import Cards from "../cards/Cards";
// import { useEffect, useState } from "react";
// import Request from "superagent";
// import { EventCard } from "../../services/events/models";
// import Card from "../card/Card";

const DIV = styled.div`
  div:nth-child(1) {
    display: flex;
    p {
      font-weight: bold;
      margin: 0;
      margin-top: 40px;
    }
  }

  div:nth-child(2) {
    margin-left: auto;
    padding-top: 40px;
  }

  svg {
    padding-left: 10px;
  }
`;

export interface DividerContainerProps {
  caso: string;
  url: string;
}
//events, groups, friends

const Divider: React.FC<DividerContainerProps> = ({ caso }) => {
  switch (caso) {
    case "events":
      return (
        <div>
          <DIV>
            <div>
              <p> Tus eventos </p>
              <div>
                <a href="/search/events">
                  <Icon icon="search" />
                </a>
                <a href="/add/events">
                  <Icon icon="add" />
                </a>
              </div>
            </div>
            <hr />
          </DIV>

          <Cards />
        </div>
      );
    case "groups":
      return (
        <DIV>
          <div>
            <p> Tus grupos </p>
            <div>
              <a href="/search/groups">
                <Icon icon="search" />
              </a>
              <a href="/add/groups">
                <Icon icon="add" />
              </a>
            </div>
          </div>
          <hr />
        </DIV>
      );

    case "friends":
      return (
        <DIV>
          <div>
            <p> Amigos </p>
            <div>
              <a href="/search/users">
                <Icon icon="search" />
              </a>
              <a href="/add/users">
                <Icon icon="add" />
              </a>
            </div>
          </div>
          <hr />
        </DIV>
      );
    default:
      return <p>nada</p>;
  }
};

export default Divider;
