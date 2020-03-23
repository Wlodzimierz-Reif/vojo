import React from "react";
import styles from "./App.module.scss";
import Routes from "../src/containers/Routes";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <>
      {/* <ProgressBar value="50" /> */}
      <Routes />
    </>
  );
};

export default App;
