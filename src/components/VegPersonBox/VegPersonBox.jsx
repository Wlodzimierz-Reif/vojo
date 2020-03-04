import React from "react";
import styles from "./VegPersonBox.module.scss";
import images from "../../assets/characters/bean-1.svg"

const VegPersonBox = (props) => {
  const h3Text = "Your vegan title here";
  const image = images;
  const pText = "Your para of p text here ";
  const boxType = props.isPrimary ? styles.primary : styles.secondary;


  return (
    <section className={`${styles.card} ${boxType}`}>
      <h3>{h3Text}</h3>
      <div>
      <img src={image} alt="vegetable picture"/>
      </div>
      <p>{pText}</p>
    </section>
  );
};

export default VegPersonBox;
