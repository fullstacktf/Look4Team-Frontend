import * as React from "react";
import Home from "../pages/home/Home";
import Events from "../pages/events/Events";
import Groups from "../pages/groups/Groups";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SearchEvents from "../pages/searchEvents/SearchEvents";
import SearchGroups from "../pages/searchGroups/SearchGroups";
import SearchUsers from "../pages/searchUsers/SearchUsers";
import AddEvents from "../pages/addEvents/AddEvents";
import AddGroups from "../pages/addGroups/AddGroups";
import AddFriends from "../pages/addUsers/AddUsers";
export interface RoutesProps {}

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/groups" component={Groups} />
      <Route path="/search/events" component={SearchEvents} />
      <Route path="/search/groups" component={SearchGroups} />
      <Route path="/search/users" component={SearchUsers} />
      <Route path="/add/events" component={AddEvents} />
      <Route path="/add/groups" component={AddGroups} />
      <Route path="/add/users" component={AddFriends} />
    </Router>
  );
};

export default Routes;
