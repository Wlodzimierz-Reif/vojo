import React from "react";
// import styles from "./App.module.scss";
import Router from "../src/containers/Routes";
// import NavBar from "./components/NavBar";
import DietType from "./containers/DietType";

const App = () => {
  return (
    <>
      <Router />
      <DietType />
    </>
  );
};

export default App;
