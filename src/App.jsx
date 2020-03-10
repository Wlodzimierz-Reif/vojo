import React from "react";
import styles from "./App.module.scss";
import EverydayFoods from "./containers/EverydayFoods";
import InfoList from "./components/InfoList";

const App = () => {
  return (
    <>
      <div className="dietContainer">
        <EverydayFoods />
      </div>
      <div className="infoList">
        <InfoList />
        <InfoList />
        <InfoList />
        <InfoList />
        <InfoList />
      </div>
    </>
  );
};

export default App;
