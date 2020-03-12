import React from "react";
import styles from "./App.module.scss";
import MealIdeasTop from "./components/MealIdeasTop";
import MealIdeasBottom from "./components/MealIdeasBottom/MealIdeasBottom";
import EverdayFoods from "./containers/EverydayFoods";
import EverydayFoods from "./containers/EverydayFoods";
import InfoList from "./components/InfoList";
import Image from "./assets/characters/characters-together.svg";

const App = () => {
  return (
    <>
      <section className={styles.infoSection}>
        <EverydayFoods />
      </section>
      {/* <section className={styles.mealIdeas}>
        <div className={styles.dietContainer}>
          <MealIdeasTop />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
        </div>
        <div>
          <MealIdeasTop />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
        </div>
        <div>
          <MealIdeasTop />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
        </div>
        <div>
          <MealIdeasTop />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
        </div>
  </section> */}
    </>
  );
};

export default App;
