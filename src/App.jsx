import React from "react";
// import styles from "./App.module.scss";
import Router from "../src/containers/Routes";
// import NavBar from "./components/NavBar";
import DietBreakdown from "./containers/DietBreakdown";
// import VegPictureBox from "./components/VegPictureBox";

const App = () => {
  return (
    <>
      <Router />
      <DietBreakdown />
    </>
  );
};

export default App;
