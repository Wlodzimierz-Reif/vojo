import React from "react";
import styles from "./MealIdeas.module.scss";
import MealIdeasTop from "../../components/MealIdeasTop";
import MealIdeasBottom from "../../components/MealIdeasBottom";
import EverydayFoods from "../../containers/EverydayFoods";

const MealIdeas = () => {
  return (
    <>
      <section className={styles.infoSection}></section>
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

export default MealIdeas;
