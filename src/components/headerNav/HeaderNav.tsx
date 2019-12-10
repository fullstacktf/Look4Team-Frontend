import * as React from "react";
import "./HeaderNav.css";
import Logo from "../logo/Logo";
import HeaderOptions from "../headerOptions/HeaderOptions";
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
          {/* <a href="/html/">HTML</a> */}
          <a href="/">
            <HeaderOptions text="inicio" />
          </a>
          <a href="/events">
            <HeaderOptions text="events" />
          </a>
          <a href="/groups">
            <HeaderOptions text="groups" />
          </a>
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
