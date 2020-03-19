import React from "react";
import styles from "./MealIdeasBottom.module.scss";

const MealIdeasBottom = props => {
  const { pMealIdeas } = props;

  return (
    <>
      <div className={styles.mealList}>
        <p>-</p>
        <p className={styles.belowDash}>{pMealIdeas}</p>
      </div>
    </>
  );
};

export default MealIdeasBottom;
