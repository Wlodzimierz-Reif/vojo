import React from "react";
import styles from "./InfoCard.module.scss";

const InfoCard = props => {
  const { nutrient, nutrientNeed, nutrientAdvice, displayStyle } = props;

  return (
    <section className={`${styles.card} ${styles[displayStyle]}`}>
      <div>
        <h3>Your {nutrient} needs:</h3>
        <h2>{nutrientNeed}</h2>
      </div>
      <p>{nutrientAdvice}</p>
      <p className={styles.link}>Learn more</p>
    </section>
  );
};

export default InfoCard;
