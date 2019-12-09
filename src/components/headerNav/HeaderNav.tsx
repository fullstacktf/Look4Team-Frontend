import * as React from "react";
import "./HeaderNav.css";
import Logo from "../logo/Logo";
import HeaderOptions from "../HeaderOptions/HeaderOptions";
import Bell from "../bell/Bell";
import Profile from "../profile/Profile";

// export interface HeaderNavProps {

// }

class HeaderNav extends React.Component<{}, {}> {
  render() {
    return (
      <header>
        <Logo />
        <nav>
          <HeaderOptions text="inicio" />
          <HeaderOptions text="events" />
          <HeaderOptions text="groups" />
        </nav>
        <div className="bell">
          <Bell />
        </div>
        <div className="profile">
          <Profile />
        </div>
      </header>
    );
  }
}

export default HeaderNav;
