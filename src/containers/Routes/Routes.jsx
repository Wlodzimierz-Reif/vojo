import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NotFound from "../NotFound";
import DietType from "../DietType";


const Routes = () => {
  return (
    <Router>
      {/* <Redirect noThrow from="/" to="home-page" />
      <HomePage path="home-page" />
      <NotFound default /> */}
      <DietType
        path="diet-type"
        dietText={
          "You are best suited to a South American-style diet. Think veganstyle Mexican cuisine, with some inspiration from Peru (think quinoa) and lots of 'Buddha bowls'. Focus you meals around lots of beans, rainbow veg and fresh salads, with a nice dose of healthy fats like avocado, nut butter or coconut. You can have some carbohydrates but make sure they are whole grains such as wild rice and quinoa. Use coconut or olive oil to cook with and avoid refined vegetable oils. As in Mexico, focus on having your big meals at breakfast or lunchtime, and a small meal early in the evening"
        }
        regionText={"South American"}
      />

    </Router>
  );
};

export default Routes;
