import React from "react";
import styles from "./App.module.scss";
import EverydayFoods from "./containers/EverydayFoods";
import MealIdeas from "./components/MealIdeas";
import InfoList from "./components/InfoList";

const App = () => {
  return (
    <>
      <div className="dietContainer">
        <MealIdeas />
      </div>
      <div className="infoList"></div>
    </>
  );
};

export default App;
