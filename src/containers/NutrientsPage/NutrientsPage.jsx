import React, { useState, useEffect } from "react";
import styles from "./NutrientsPage.module.scss";
import InfoCard from "../../components/InfoCard";
import logo from "../../assets/logos/primary-logo.png";
import SidePanel from "../SidePanel";
import { Link } from "@reach/router";

const NutrientsPage = props => {
  const { nutrients, user } = props;
  //add user to props when login saves through navigation

  const [high, updateHigh] = useState([]);
  const [raised, updateRaised] = useState([]);
  const [slightlyRaised, updateSlightlyRaised] = useState([]);
  const [normal, updateNormal] = useState([]);
  const [lower, updateLower] = useState([]);

  const [isPanelDisplayed, updateDisplay] = useState(false);
  const [currentColor, updateColor] = useState("red");
  const [currentNutrient, updateNutrient] = useState(null);

  const insertJsx = isPanelDisplayed ? (
    <SidePanel
      displayStyle={currentColor}
      handleClick={() => updateDisplay(!isPanelDisplayed)}
      nutrient={currentNutrient}
    />
  ) : null;

  useEffect(() => {
    updateHigh(nutrients.filter(nutrient => checkTheLevel(nutrient, "high")));
    updateRaised(
      nutrients.filter(nutrient => checkTheLevel(nutrient, "slightly raised"))
    );
    updateSlightlyRaised(
      nutrients.filter(nutrient => checkTheLevel(nutrient, "raised"))
    );
    updateNormal(
      nutrients.filter(nutrient => checkTheLevel(nutrient, "normal"))
    );
    updateLower(nutrients.filter(nutrient => checkTheLevel(nutrient, "lower")));
  }, [nutrients, user]);

  const checkTheLevel = (nutrient, level) =>
    nutrient["requirement-category"] === level;

  const mapFunction = array => {
    return array.map(item => (
      <InfoCard
        nutrient={item}
        displayPanel={(nutrient, displayStyle) => {
          updateNutrient(nutrient);
          updateColor(displayStyle);
          updateDisplay(!isPanelDisplayed);
        }}
      />
    ));
  };

  return (
    <>
      <section className={styles.showPanel}>{insertJsx}</section>
      <section className={styles.nutrientPage}>
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
