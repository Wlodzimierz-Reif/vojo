import React from "react";
import styles from "./MealIdeasTop.module.scss";

const MealIdeasTop = () => {
  return (
    <>
      <div>
        <h3 className={styles.mealHeader}>Snaks</h3>
        <p className={styles.mealList}>
          Coconut yogurt topped with nuts, seeds and berries
        </p>
      </div>
    </>
  );
};

export default MealIdeasTop;
