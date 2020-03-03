import React from "react";
import styles from "./InfoCard.module.scss";

const InfoCard = () => {
  return (
    <section className={styles.card}>
      <h3>Your magnesium needs:</h3>
      <h2>High</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit debitis illum esse, fugiat
        quasi magnam vitae placeat laudantium delectus nesciunt doloremque laboriosam totam nobis
        aliquid. Quibusdam voluptatibus quas fugiat delectus!
      </p>
      <a href="">Learn more</a>
    </section>
  );
};

export default InfoCard;
