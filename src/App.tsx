import * as React from "react";
import "./App.css";
import "./components/routes/Routes";
import Routes from "./components/routes/Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
