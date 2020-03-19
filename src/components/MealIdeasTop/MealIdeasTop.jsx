import React from "react";
import styles from "./MealIdeasTop.module.scss";

const MealIdeasTop = () => {
  return (
    <>
      <h3 className={styles.mealHeader}>Breakfasts</h3>
      <div className={styles.mealList}>
        <p>Coconut yogurt topped with nuts, seeds and berries</p>
      </div>
    </>
  );
};

export default MealIdeasTop;
