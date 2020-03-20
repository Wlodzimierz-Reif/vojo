import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
// import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import PrioritiesPage from "../PrioritiesPage";
<<<<<<< HEAD
import Footer from "../../components/Footer";
import PaymentPage from "../PaymentPage/PaymentPage";
import mockData from "../../data";
import RegisterDNA from "../RegisterDNA";

import DietBreakdown from "../DietBreakdown";

const Routes = () => {
  // Any object, any key that contains the words
  // "recommendation" or "action" place into
  // new recommendations array

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="priorities-page" />
        <HomePage path="home-page" />
        <NutrientsPage nutrients={mockData.nutrients} path="nutrients-page" />
        <PrioritiesPage path="priorities-page" />
        <PaymentPage path="payment-page" />
        <RegisterDNA path="register-dna" />
        <NotFound default />
        <DietBreakdown brief={"ysfadud"} path="diet-breakdown" />
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
