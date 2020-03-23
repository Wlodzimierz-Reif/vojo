import React from "react";
import styles from "./App.module.scss";
import Routes from "../src/containers/Routes";

const App = () => {
  return (
    <>
      <ProgressBar value="50" />
      <Routes />
    </>
  );
};

export default App;
