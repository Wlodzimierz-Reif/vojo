import React from "react";
import styles from "./NutrientsInfo.module.scss";
import List from "../List";
import DisplaySlider from "../DisplaySlider";

const NutrientsInfo = props => {
  const { displayStyle, nutrient } = props;

  const alcoholJsx = nutrient["alcohol-action"];

  let value = null;

  switch (displayStyle) {
    case "green":
      value = 95;
      break;
    case "yellow":
      value = 65;
      break;
    case "orange":
      value = 35;
      break;
    default:
      value = 5;
  }

  return (
    <>
      <section className={`${styles.nutrientInfo} ${styles[displayStyle]}`}>
        <h2>{nutrient.name}</h2>
        <p>{nutrient["requirement-action"]}</p>
        <p>{nutrient["requirement-recommendation"]}</p>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <DisplaySlider sliderColor={"redToGreen"} value={value} />
          </div>
        </div>
        <p className={styles.bold}>
          Your recommended{" "}
          {nutrient.name.charAt(0).toUpperCase() + nutrient.name.slice(1)}{" "}
          intake:{" "}
          <span className={`${styles.intakeValue} ${styles.bold}`}>
            {nutrient["intake-recommendation"]}
          </span>
        </p>

        <p>{nutrient["intake-action"]}</p>
        {/* <List listItems={nutrient.list} /> */}
        {/* <h3>{nutrient.subheading}</h3>
        <p>{nutrient.moreInformation}</p> */}
      </section>
    </>
  );
};

export default NutrientsInfo;
