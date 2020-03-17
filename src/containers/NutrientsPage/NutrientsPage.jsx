import React, { useState } from "react";
import styles from "./NutrientsPage.module.scss";
import InfoCard from "../../components/InfoCard";
import logo from "../../assets/logos/primary-logo.png";
import topWave from "../../assets//graphic-devices/grey-wave-top.svg";
import bottomWave from "../../assets//graphic-devices/grey-wave-bottom.svg";
import blueBerry from "../../assets/characters/blueberry-2.svg";
import SidePanel from "../SidePanel";
import { Link } from "@reach/router";

const NutrientsPage = props => {
  const { nutrients } = props;
  // const { name, priority-category } = nutrients;

  const [currentState, updateState] = useState(false);
  const [currentColor, updateColor] = useState("red");
  const insertJsx = currentState ? (
    <SidePanel
      displayStyle={currentColor}
      handleClick={() => updateState(!currentState)}
      nutrients={nutrients}
    />
  ) : null;

  

  // let high = [];
  // let raised = [];
  // let slightlyRaised = [];
  // let normal = [];

  // const getHigh = () => {
  //   high = nutrients.filter(
  //     nutrient => nutrient["requirement-category"] === "high"
  //   );
  // };

  // const getRaised = () => {
  //   raised = nutrients.filter(
  //     nutrient => nutrient["requirement-category"] === "raised"
  //   );
  // };

  // const getSlightlyRaised = () => {
  //   slightlyRaised = nutrients.filter(
  //     nutrient => nutrient["requirement-category"] === "slightly raised"
  //   );
  // };

  // const getNormal = () => {
  //   normal = nutrients.filter(
  //     nutrient =>
  //       nutrient["requirement-category"] === "normal" ||
  //       nutrient["requirement-category"] === "lower"
  //   );
  // };

  // getHigh();
  // getRaised();
  // getSlightlyRaised();
  // getNormal();
  // console.log(high);
  // console.log(raised);
  // console.log(slightlyRaised);
  // console.log(normal);

  // const print = () => {
  //   for (let i = 0; i < high.length; i++) {
  //     <InfoCard
  //       displayStyle={cardColor}
  //       nutrientName={high[i].name}
  //       nutrientNeed={high[i]["requirement-category"]}
  //       nutrientAdvice={high[i]["requirement-recommendation"]}
  //       handleClick={() => updateState(!currentState)}
  //       changeColor={color => updateColor(color)}
  //     />;
  //   }
  // };

  return (
    <>
      <section className={styles.showPanel}>{insertJsx}</section>
      <section className={styles.nutrientPage}>
        <img src={topWave} alt="" className={styles.wave} />
        <div className={styles.topContainer}>
          <img src={logo} alt="vojo logo" />
          <Link to="../priorities-page">
            <p>menu</p>
          </Link>
        </div>
        <h1>Nutrients</h1>
        <div className={styles.infoCardHolder} data-simplebar>
          <InfoCard nutrient={nutrients[0]} />
          <InfoCard nutrient={nutrients[2]} />

          {/* <InfoCard
            displayStyle={cardColor}
            nutrientName={""}
            nutrientNeed="high"
            nutrientAdvice="Your recommended intake: 5 mg/day
      Great news – you are a good converter of beta-carotene to vitamin A!
      Learn more"
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
          <InfoCard
            displayStyle={"red"}
            nutrientName={"B12"}
            nutrientNeed="High"
            nutrientAdvice="Your recommended intake: 5 mg/day
      Great news – you are a good converter of beta-carotene to vitamin A!
      Learn more"
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
          <InfoCard
            displayStyle={"orange"}
            nutrientName={"B12"}
            nutrientNeed="Raised"
            nutrientAdvice="You may have raised B12 requirements. Supplement at least 50 µg/day. If you go vegan, you are recommend to supplement a minimum of this recommended dose of B12 every day. Even while you’re not yet vegan, you might still benefit from supplementing with B12 if you're not eating animal foods every day."
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
          <InfoCard
            displayStyle={"yellow"}
            nutrientName={"B12"}
            nutrientNeed="Normal"
            nutrientAdvice="Your recommended intake: 5 mg/day
              Great news – you are a good converter of beta-carotene to vitamin A!"
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
          <InfoCard
            displayStyle={"yellow"}
            nutrientName={"B12"}
            nutrientNeed="Normal"
            nutrientAdvice="Your recommended intake: 5 mg/day
              Great news – you are a good converter of beta-carotene to vitamin A!"
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
          <InfoCard
            displayStyle={"green"}
            nutrientName={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
              Great news – you are a good converter of beta-carotene to vitamin A!"
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
          <InfoCard
            displayStyle={"green"}
            nutrientName={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
              Great news – you are a good converter of beta-carotene to vitamin A!"
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
          <InfoCard
            displayStyle={"green"}
            nutrientName={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
              Great news – you are a good converter of beta-carotene to vitamin A!"
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
          <InfoCard
            displayStyle={"green"}
            nutrientName={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
              Great news – you are a good converter of beta-carotene to vitamin A!"
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
          <InfoCard
            displayStyle={"green"}
            nutrientName={"B12"}
            nutrientNeed="Lower"
            nutrientAdvice="Your recommended intake: 5 mg/day
              Great news – you are a good converter of beta-carotene to vitamin A!"
            handleClick={() => updateState(!currentState)}
            changeColor={color => updateColor(color)}
          />
        </div>
        <div className={styles.bottomContainer}>
          <img src={blueBerry} className={styles.blueBerry} alt="" />
          <img
            src={bottomWave}
            className={`${styles.wave} ${styles.waveBottom}`}
            alt=""
          /> */}
        </div>
      </section>
    </>
  );
};

export default NutrientsPage;
