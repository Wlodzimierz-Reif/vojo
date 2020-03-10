import React from "react";
import styles from "./App.module.scss";
import EverydayFoods from "./containers/EverydayFoods";

const App = () => {
  return (
    <>
      <div className="dietContainer">
        <EverydayFoods />
      </div>
      <div className="infoList"></div>
    </>
  );
};

export default App;
