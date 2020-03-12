import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NotFound from "../NotFound";
import PrioritiesPage from "../PrioritiesPage";
import MealIdeas from "../MealIdeas/MealIdeas";
import EverydayFoods from "../EverydayFoods/EverydayFoods";

const Routes = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="priorities-page" />
      {/* <HomePage path="home-page" />
      <PrioritiesPage path="priorities-page" /> */}
      <EverydayFoods path="everyday-foods" />
      <MealIdeas path="meal-ideas" />
      {/* <NotFound default /> */}
    </Router>
  );
};

export default Routes;
