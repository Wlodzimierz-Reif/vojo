import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import PrioritiesPage from "../PrioritiesPage";
import Footer from "../../components/Footer";
import PaymentPage from "../PaymentPage/PaymentPage";
import mockData from "../../data";
import RegisterDNA from "../RegisterDNA";
import EverydayFoods from "../EverydayFoods";
import MealIdeas from "../MealIdeas";

const Routes = () => {
  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="priorities-page" />
        <HomePage path="home-page" />
        <NutrientsPage nutrients={mockData.nutrients} path="nutrients-page" />
        <PrioritiesPage path="priorities-page" />
        <PaymentPage path="payment-page" />
        <RegisterDNA path="register-dna" />
        <EverydayFoods path="everyday-foods" />
        <MealIdeas path="meal-ideas" />
        <NotFound default />
      </Router>
      <Footer />
    </>
  );
};

export default Routes;
