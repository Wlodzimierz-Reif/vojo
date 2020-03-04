import React from "react";
import styles from "./DisplaySlider.module.scss";

const DisplaySlider = props => {
  const { sliderColor } = props;
  let sliderClass;

  switch (sliderColor) {
    case "redGreenRed":
      sliderClass = styles.redGreenRed;
      break;
    case "redGreenYellow":
      sliderClass = styles.redGreenYellow;
      break;
    default:
      sliderClass = styles.redToGreen;
      break;
  }

  return (
    <div className={`${styles.slider} ${sliderClass}`}>
      <div className={styles.sliderGauge}></div>
    </div>
  );
};

export default DisplaySlider;
