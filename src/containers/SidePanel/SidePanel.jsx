import React from "react";
import styles from "./SidePanel.module.scss";
import topWave from "../../assets//graphic-devices/grey-wave-top.svg";
import bottomWave from "../../assets//graphic-devices/grey-wave-bottom.svg";
import NutrientsInfo from "../../components/NutrientsInfo/NutrientsInfo";

const SidePanel = () => {
  return (
    <>
      <section className={styles.sidePanel}>
        <div>
          <img src={topWave} className={styles.topWave} alt="" />
          <p className={styles.closeButton}>Close</p>
          <NutrientsInfo />
          <img src={bottomWave} className={styles.bottomWave} alt="" />
        </div>
      </section>
    </>
  );
};

export default SidePanel;
