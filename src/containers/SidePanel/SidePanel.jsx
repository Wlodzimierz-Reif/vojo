import React from "react";
import styles from "./SidePanel.module.scss";
import topWave from "../../assets//graphic-devices/grey-wave-top.svg";
import bottomWave from "../../assets//graphic-devices/grey-wave-bottom.svg";
import NutrientsInfo from "../../components/NutrientsInfo/NutrientsInfo";

const SidePanel = props => {
  const { handleClick, displayStyle, nutrient } = props;

  return (
    <>
      <section className={styles.sidePanelContainer}>
        <div className={styles.sidePanel}>
          <img src={topWave} className={styles.topWave} alt="" />
          <p
            className={styles.closeButton}
            onClick={event => handleClick(event.target.value)}
          >
            Close
          </p>
          <NutrientsInfo displayStyle={displayStyle} nutrient={nutrient} />
          <img src={bottomWave} className={styles.bottomWave} alt="" />
        </div>
      </section>
    </>
  );
};

export default SidePanel;
