import * as React from "react";
import "./App.css";
import "./components/routes/Routes";
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;
