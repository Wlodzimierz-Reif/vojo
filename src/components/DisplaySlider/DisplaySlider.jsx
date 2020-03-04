import React from "react";
import styles from "./DisplaySlider.module.scss";


const DisplaySlider = (sliderColor) => {
  return (
    
      /* <div className={`${styles.slider} ${styles.sliderColor}`}> */
      <div className={`${styles.slider} ${styles.redToGreen}`}>    
        <div className={styles.sliderGauge}>
        </div>
      </div>
    
  );
};

export default DisplaySlider;
