import React from "react";
import styles from "./VegPictureBox.module.scss";
import images from "../../assets/characters/carrot-1.svg"

const VegPictureBox = () => {
  const pText = "insert text from prop"
  const image = images
  return (
    <section className={styles.card}>
      <img src={image} alt="vegetable image"/>
      <p>{pText}</p>
    </section>
  );
};

export default VegPictureBox;
