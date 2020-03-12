import React from "react";
import styles from "./VegPersonBox.module.scss";

const VegPersonBox = props => {
  const { pText, image, h3Text } = props;

  const boxType = props.isPrimary ? styles.primary : styles.secondary;

  return (
    <section className={`${styles.card} ${boxType}`}>
      <h3>{h3Text}</h3>
      <div>
        <img src={image} alt="vegetable" />
      </div>
      <p>{pText}</p>
    </section>
  );
};

export default VegPersonBox;
