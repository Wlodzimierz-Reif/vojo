import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
// import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import PrioritiesPage from "../PrioritiesPage";
<<<<<<< HEAD
import Footer from "../../components/Footer";

const Routes = () => {
  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="priorities-page" />
        <HomePage path="home-page" />
        <NutrientsPage path="nutrients-page" />
        <PrioritiesPage path="priorities-page" />
        <NotFound default />
      </Router>
      <Footer />
    </>
=======
import MealIdeas from "../MealIdeas/MealIdeas";
import EverydayFoods from "../EverydayFoods/EverydayFoods";

const Routes = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="priorities-page" />
      <HomePage path="home-page" />
      <PrioritiesPage path="priorities-page" />
      <EverydayFoods path="everyday-foods" />
      <MealIdeas path="meal-ideas" />
      <NotFound default />
    </Router>
>>>>>>> 4db6e5083ec9cab80747936b943b31f8d15fdcf6
  );
};

export default Routes;
