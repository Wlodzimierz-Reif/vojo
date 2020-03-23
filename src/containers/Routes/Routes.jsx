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

import DietBreakdown from "../DietBreakdown";

const Routes = (props) => {

  const {signIn, signOut} = props;
  // Any object, any key that contains the words
  // "recommendation" or "action" place into
  // new recommendations array

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="priorities-page" />
        <HomePage path="home-page" />
        <NutrientsPage nutrients={mockData.nutrients} path="nutrients-page"/>
        <PrioritiesPage path="priorities-page" signInWithRedirect={signIn} signOut={signOut} />
        <PaymentPage path="payment-page" />
        <RegisterDNA path="register-dna" />
        <NotFound default />
        <DietBreakdown brief={"ysfadud"} path="diet-breakdown" />
      </Router>
      <Footer />
    </>
  );
};

export default Routes;
