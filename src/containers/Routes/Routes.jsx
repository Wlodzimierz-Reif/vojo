import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import PrioritiesPage from "../PrioritiesPage";
import Dashboard from "../../containers/Dashboard"
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
        <Redirect noThrow from="/" to="dashboard" />
        <HomePage path="home-page" />
        <NutrientsPage nutrients={mockData.nutrients} path="nutrients-page" />
        <PrioritiesPage path="priorities-page" />
        <Dashboard path="dashboard" />
        <PaymentPage path="payment-page" />
        <RegisterDNA path="register-dna" />
        <NotFound default />
        <DietBreakdown brief={"ysfadud"} path="diet-breakdown" />
      </Router>
    </>
  );
};

export default Routes;
