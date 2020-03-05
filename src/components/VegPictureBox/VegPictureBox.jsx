import React from "react";
import styles from "./VegPictureBox.module.scss";
// import images from "../../assets/characters/carrot-1.svg"

const VegPictureBox = (props) => {

  const { pText, image} = props;

  return (
    <section className={styles.card}>
      <img src={image} alt={`${pText} image`}/>
      <p>{pText}</p>
    </section>
  );
};

export default VegPictureBox;
