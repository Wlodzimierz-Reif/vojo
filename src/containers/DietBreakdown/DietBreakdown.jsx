import React from "react";
import styles from "./DietBreakdown.module.scss";
import VegPictureBox from "../../components/VegPictureBox";
import beet from "../../assets/characters/beetroot-1.svg";
import broc from "../../assets/characters/broccoli-1.svg";
import carrot from "../../assets/characters/carrot-1.svg";

const DietBreakdown = props => {
  const { brief, imagesForVegBx, txtForVegBx } = props;

  return (
    <>
      <section className={styles.secInfo}>
        <section className={styles.imgs}>
          <div className={styles.primary}>
            <VegPictureBox pText={"Rainbow veg"} image={carrot} />
          </div>
          <div className={styles.primary}>
            <VegPictureBox pText={"Leafy greens"} image={broc} />
          </div>
          <div className={styles.primary}>
            <VegPictureBox pText={"Root veg"} image={beet} />
          </div>
        </section>
        <p>{brief}</p>
      </section>
    </>
  );
};

export default DietBreakdown;
