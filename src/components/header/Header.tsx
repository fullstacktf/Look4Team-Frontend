import * as React from "react";
import "./Header.css";
import Logo from "../logo/Logo";
import HeaderOptions from "../headerOptions/HeaderOptions";
import Bell from "../bell/Bell";
import Profile from "../profile/Profile";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const HEADER = styled.header`
  background-color: #1f2833;
  display: flex;
  align-items: center;
  padding-left: 12%;
  padding-right: 12%;
  /* a:nth-child(1) {
    background-color: red;
  } */
  .active {
    border-bottom: 3px solid #66fcf1;
    h1 {
      color: white;
    }
    svg {
      fill: #66fcf1;
    }
  }
`;

const NAV = styled.nav`
  margin-left: 5%;
  display: flex;

  a {
    margin-right: 1.5rem;
    text-decoration: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HEADER>
      <a href="/">
        <Logo />
      </a>

      <NAV className="nav">
        {/* <a href="/">
          <HeaderOptions text="inicio" />
        </a>
        <a href="/events">
          <HeaderOptions text="events" />
        </a>
        <a href="/groups">
          <HeaderOptions text="groups" />
        </a> */}
        <NavLink exact activeClassName="active" to="/">
          <HeaderOptions text="inicio" />
        </NavLink>

        <NavLink to="/events">
          <HeaderOptions text="events" />
        </NavLink>

        <NavLink to="/groups">
          <HeaderOptions text="groups" />
        </NavLink>
      </NAV>

      <div className="bell">
        <Bell />
      </div>
      <div className="profile">
        <Profile />
      </div>
    </HEADER>
  );
};

export default Header;
