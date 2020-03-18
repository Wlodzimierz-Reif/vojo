import React, { useState, useEffect } from "react";
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

  const [high, updateHigh] = useState([]);
  const [raised, updateRaised] = useState([]);
  const [slightlyRaised, updateSlightlyRaised] = useState([]);
  const [normal, updateNormal] = useState([]);
  const [lower, updateLower] = useState([]);

  useEffect(() => {
    updateArrays();
  }, []);

  const [currentState, updateState] = useState(false);
  const [currentColor, updateColor] = useState("red");
  const insertJsx = currentState ? (
    <SidePanel
      displayStyle={currentColor}
      handleClick={() => updateState(!currentState)}
      nutrients={nutrients}
    />
  ) : null;

  const updateArrays = () => {
    updateHigh(nutrients.filter(nutrient => checkTheLevel(nutrient, "high")));
    updateRaised(
      nutrients.filter(nutrient => checkTheLevel(nutrient, "slightly-raised"))
    );
    updateSlightlyRaised(
      nutrients.filter(nutrient => checkTheLevel(nutrient, "raised"))
    );
    updateNormal(
      nutrients.filter(nutrient => checkTheLevel(nutrient, "normal"))
    );

    updateLower(nutrients.filter(nutrient => checkTheLevel(nutrient, "lower")));
  };

  const checkTheLevel = (nutrient, level) =>
    nutrient["requirement-category"] === level;

  const mapFunction = array => {
    return array.map(item => <InfoCard nutrient={item} />);
  };

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
        <div className={styles.infoCardHolder}>
          {mapFunction(high)}
          {mapFunction(slightlyRaised)}
          {mapFunction(raised)}
          {mapFunction(normal)}
          {mapFunction(lower)}
        </div>
      </section>
    </>
  );
};

export default NutrientsPage;
