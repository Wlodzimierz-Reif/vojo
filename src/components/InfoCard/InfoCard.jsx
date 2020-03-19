import React, { useState } from "react";
import styles from "./InfoCard.module.scss";
import SidePanel from "../../containers/SidePanel";

const InfoCard = props => {
  const { nutrient, displayPanel } = props;

  let displayStyle = null;

  switch (nutrient["requirement-category"]) {
    case "lower":
    case "normal":
      displayStyle = "green";
      break;
    case "slightly raised":
      displayStyle = "yellow";
      break;
    case "raised":
      displayStyle = "orange";
      break;
    default:
      displayStyle = "red";
  }

  // const showSidePanel = () => {
  //   return <SidePanel nutrient={nutrient} displayStyle={displayStyle} />;
  // };

  return (
    <>
      {/* <section className={styles.showPanel}>{insertJsx}</section> */}
      <section
        onClick={
          () => displayPanel(nutrient, displayStyle)
          // () => updateState(!currentState)
          // changeColor(displayStyle);
        }
        className={`${styles.card} ${styles[displayStyle]}`}
      >
        <div>
          <h3>
            Your{" "}
            {nutrient.name.charAt(0).toUpperCase() + nutrient.name.slice(1)}{" "}
            needs:
          </h3>
          <h2>
            {nutrient["requirement-category"].charAt(0).toUpperCase() +
              nutrient["requirement-category"].slice(1)}
          </h2>
        </div>
        <p>{nutrient["requirement-recommendation"]}</p>
        <p>{nutrient["intake-recommendation"]}</p>
        <p>{nutrient["intake-action"]}</p>
        <p className={styles.link}>Learn more</p>
      </section>
    </>
  );
};

export default InfoCard;
