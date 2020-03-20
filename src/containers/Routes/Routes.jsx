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
      </Router>
      <Footer />
    </>
  );
};

export default Routes;
