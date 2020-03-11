import React from "react";
import styles from "./DietBreakdown.module.scss";
import VegPictureBox from "../../components/VegPictureBox";
import beet from "../../assets/characters/beetroot-1.svg";
import broc from "../../assets/characters/broccoli-1.svg";
import carrot from "../../assets/characters/carrot-1.svg";

const DietBreakdown = () => {
  return (
    <>
      <section className={styles.primary}>
        <VegPictureBox pText={"Rainbow veg"} image={carrot} />
      </section>
      <section className={styles.primary}>
        <VegPictureBox pText={"Leafy greens"} image={broc} />
      </section>
      <section className={styles.primary}>
        <VegPictureBox pText={"Root veg"} image={beet} />
      </section>
    </>
  );
};

export default DietBreakdown;
