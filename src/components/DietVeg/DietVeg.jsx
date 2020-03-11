import React from "react";
import styles from "./DietVeg.module.scss";
import VegPictureBox from "../VegPictureBox";

const DietVeg = props => {
  const { brief, imagesForVegBx, txtForVegBx, title } = props;
  return (
    <>
      <section className={styles.secInfo}>
        <p className={styles.title}>{title}</p>
        <section className={styles.imgs}>
          <div className={styles.primary}>
            <DietVeg pText={txtForVegBx} image={imagesForVegBx} />
          </div>
        </section>
        <p>{brief}</p>
      </section>
    </>
  );
};

export default DietVeg;
