import React from "react";
import Main from "./Main/Main";
import Header from "./Sidebars/Header";
import Toolbar from "./Sidebars/Toolbar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Toolbar className="tempBcgToolbar" />
      <Main />
    </div>
  );
};

export default App;
