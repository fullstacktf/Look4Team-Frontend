import * as React from "react";
import Home from "../../pages/home/Home";
import Events from "../../pages/events/Events";
import Groups from "../../pages/groups/Groups";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  BrowserRouter,
  Switch
} from "react-router-dom";

import SearchEvents from "../../pages/searchEvents/SearchEvents";
import SearchGroups from "../../pages/searchGroups/SearchGroups";
import SearchUsers from "../../pages/searchUsers/SearchUsers";
import AddEvents from "../../pages/addEvents/AddEvents";
import AddGroups from "../../pages/addGroups/AddGroups";
import AddFriends from "../../pages/addUsers/AddUsers";
import Header from "../header/Header";
export interface RoutesProps {}

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/groups" component={Groups} />
      <Route path="/events/search" component={SearchEvents} />
      <Route path="/groups/searc" component={SearchGroups} />
      <Route path="/users/search" component={SearchUsers} />
      <Route path="/events/add" component={AddEvents} />
      <Route path="/groups/add" component={AddGroups} />
      <Route path="/groups/add" component={AddFriends} />
    </Router>
  );
};

export default Routes;
