import React from "react";
import styles from "./App.module.scss";
import MealIdeasTop from "./components/MealIdeasTop";
import MealIdeasBottom from "./components/MealIdeasBottom/MealIdeasBottom";

const App = () => {
  return (
    <>
      <section className={styles.mealIdeas}>
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
      </section>
    </>
  );
};

export default App;
