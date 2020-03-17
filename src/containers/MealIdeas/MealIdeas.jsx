import React from "react";
import styles from "./MealIdeas.module.scss";
import MealIdeasTop from "../../components/MealIdeasTop";
import MealIdeasBottom from "../../components/MealIdeasBottom";

const MealIdeas = () => {
  return (
    <>
      <h3 className={styles.mealHeader}>Meal ideas</h3>
      <section className={styles.mealIdeas}>
        <div className={styles.dietContainer}>
          <MealIdeasTop />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
        </div>
        <div className={styles.dietContainer}>
          <MealIdeasTop />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
        </div>
        <div className={styles.dietContainer}>
          <MealIdeasTop />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
        </div>
        <div className={styles.dietContainer}>
          <MealIdeasTop />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
          <MealIdeasBottom />
        </div>
      </section>
    </>
  );
};

export default MealIdeas;
