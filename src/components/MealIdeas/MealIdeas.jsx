import React from "react";
import styles from "./MealIdeas.module.scss";

const MealIdeas = () => {
  return (
    <>
      <h3>Breakfasts</h3>
      <ul className={styles.mealList}>
        <li>-</li>
        <li>Coconut yogurt topped with nuts, seeds and berries</li>
        <li>-</li>
        <li>
          'Porridge' made with ground almonds, dessicated coconut, ground
          flaxseed, hemp seeds and soya milk
        </li>
      </ul>
    </>
  );
};

export default MealIdeas;
