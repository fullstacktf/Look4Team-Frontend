import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Events from "./components/events/Events";
import Groups from "./components/groups/Groups";
import HeaderNav from "./components/headerNav/HeaderNav";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <HeaderNav />
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/groups" component={Groups} />
      </Router>
    </div>
  );
};

export default App;
