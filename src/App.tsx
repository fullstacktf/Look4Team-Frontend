import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Events from "./components/events/Events";
import Groups from "./components/groups/Groups";
import Header from "./components/header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/groups" component={Groups} />
      </Router>
      {/* <Header />
      <Home /> */}
    </div>
  );
};

export default App;
