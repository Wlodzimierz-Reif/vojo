import React from "react";
import "./App.module.scss";
import Routes from "./containers/Routes";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <>
      <ProgressBar value="50" />
      <Routes />
    </>
  );
};

export default App;
