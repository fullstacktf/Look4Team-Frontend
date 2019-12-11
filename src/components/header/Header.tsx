import * as React from "react";
import "./Header.css";
import Logo from "../logo/Logo";
import HeaderOptions from "../headerOptions/HeaderOptions";
import Bell from "../bell/Bell";
import Profile from "../profile/Profile";
import styled from "@emotion/styled";

const Header: React.FC = () => {
  return (
    <HeaderCSS>
      <Logo />
      <Nav>
        <a href="/">
          <HeaderOptions text="inicio" />
        </a>
        <a href="/events">
          <HeaderOptions text="events" />
        </a>
        <a href="/groups">
          <HeaderOptions text="groups" />
        </a>
      </Nav>
      <div className="bell">
        <Bell />
      </div>
      <div className="profile">
        <Profile />
      </div>
    </HeaderCSS>
  );
};

const HeaderCSS = styled.header`
  background-color: #1f2833;
  display: flex;
  align-items: center;
  padding-left: 161px;
  padding-right: 161px;
`;
const Nav = styled.nav`
  padding-right: 425px;
  padding-left: 59px;
  display: flex;
`;
export default Header;
