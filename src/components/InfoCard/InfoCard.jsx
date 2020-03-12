import React from "react";
import styles from "./InfoCard.module.scss";

const InfoCard = props => {
  const {
    nutrientName,
    nutrientNeed,
    nutrientAdvice,
    displayStyle,
    handleClick,
    changeColor
  } = props;

  return (
    <section
      onClick={event => {
        handleClick(event.target.value);
        changeColor(displayStyle);
        }
      }
      className={`${styles.card} ${styles[displayStyle]}`}
    >
      <div>
        <h3>Your {nutrientName} needs:</h3>
        <h2>{nutrientNeed}</h2>
      </div>
      <p>{nutrientAdvice}</p>
      <p className={styles.link}>Learn more</p>
    </section>
  );
};

export default InfoCard;
