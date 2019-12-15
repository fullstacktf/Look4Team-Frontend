import * as React from "react";
import Icon from "../icon/Icon";
import styled from "@emotion/styled";

const DIV = styled.div`
  display: flex;

  div {
    margin-left: auto;
    padding-top: 40px;
  }

  svg {
    padding-left: 10px;
  }
  p {
    margin: 0;
    margin-top: 40px;
    font-family: "roboto";
  }
`;

export interface DividerContainerProps {
  caso: string;
}
//events, groups, friends

const Divider: React.FC<DividerContainerProps> = ({ caso }) => {
  switch (caso) {
    case "events":
      return (
        <div>
          <DIV>
            <p> Tus eventos </p>
            <div>
              <a href="/search/events">
                <Icon icon="search" />
              </a>
              <a href="/add/events">
                <Icon icon="add" />
              </a>
            </div>
          </DIV>
          <hr />
        </div>
      );
    case "groups":
      return (
        <div>
          <DIV>
            <p> Tus grupos </p>
            <div>
              <a href="/search/groups">
                <Icon icon="search" />
              </a>
              <a href="/add/groups">
                <Icon icon="add" />
              </a>
            </div>
          </DIV>
          <hr />
        </div>
      );

    case "friends":
      return (
        <div>
          <DIV>
            <p> Amigos </p>
            <div>
              <a href="/search/users">
                <Icon icon="search" />
              </a>
              <a href="/add/users">
                <Icon icon="add" />
              </a>
            </div>
          </DIV>
          <hr />
        </div>
      );
    default:
      return <p>nada</p>;
  }
};

export default Divider;
