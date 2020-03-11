import React from "react";
import styles from "./NutrientsPage.module.scss";
import InfoCard from "../../components/InfoCard";
import logo from "../../assets/logos/primary-logo.png";
import topWave from "../../assets//graphic-devices/grey-wave-top.svg";
import bottomWave from "../../assets//graphic-devices/grey-wave-bottom.svg";
import blueBerry from "../../assets/characters/blueberry-2.svg";

const NutrientsPage = () => {
  return (
    <>
      <section className={styles.nutrientPage}>
        <img src={topWave} alt="" className={styles.wave} />
        <div className={styles.topContainer}>
          <img src={logo} alt="vojo logo" />
          <p>menu</p>
        </div>
        <h1>Nutrients</h1>
        <div className={styles.infoCardHolder} data-simplebar>
          <InfoCard
            displayStyle={"red"}
            nutrient={"B12"}
            nutrientNeed="High"
            nutrientAdvice="Your recommended intake: 5 mg/day
      Great news – you are a good converter of beta-carotene to vitamin A!
      Learn more"
          />
          <InfoCard
            displayStyle={"orange"}
            nutrient={"B12"}
            nutrientNeed="Raised"
            nutrientAdvice="You may have raised B12 requirements. Supplement at least 50 µg/day. If you go vegan, you are recommend to supplement a minimum of this recommended dose of B12 every day. Even while you’re not yet vegan, you might still benefit from supplementing with B12 if you're not eating animal foods every day."
          />

          <InfoCard
            displayStyle={"yellow"}
            nutrient={"B12"}
            nutrientNeed="Normal"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
          <InfoCard
            displayStyle={"green"}
            nutrient={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
          <InfoCard
            displayStyle={"green"}
            nutrient={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
          <InfoCard
            displayStyle={"green"}
            nutrient={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
          <InfoCard
            displayStyle={"green"}
            nutrient={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
          <InfoCard
            displayStyle={"green"}
            nutrient={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
          <InfoCard
            displayStyle={"green"}
            nutrient={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
          <InfoCard
            displayStyle={"green"}
            nutrient={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
          <InfoCard
            displayStyle={"green"}
            nutrient={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
          <InfoCard
            displayStyle={"green"}
            nutrient={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
          Great news – you are a good converter of beta-carotene to vitamin A!"
          />
        </div>
        <div className={styles.bottomContainer}>
          <img src={blueBerry} className={styles.blueBerry} alt="" />
          <img
            src={bottomWave}
            className={`${styles.wave} ${styles.waveBottom}`}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default NutrientsPage;
