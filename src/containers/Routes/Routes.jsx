import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import QuestionnairePage from "../QuestionnairePage";
import PrioritiesPage from "../PrioritiesPage";
import Footer from "../../components/Footer";
import PaymentPage from "../PaymentPage/PaymentPage";
import mockData from "../../data";
import RegisterDNA from "../RegisterDNA";
import DietBreakdown from "../DietBreakdown";
import LandingPage from "../LandingPage";

const Routes = props => {
  const { signIn, signOut } = props;
  // Any object, any key that contains the words
  // "recommendation" or "action" place into
  // new recommendations array

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="landing-page" />
        <LandingPage
          path="landing-page"
          signInWithRedirect={signIn}
          signOut={signOut}
        />
        <NutrientsPage nutrients={mockData.nutrients} path="nutrients-page" />
        <PrioritiesPage
          path="priorities-page"
          signInWithRedirect={signIn}
          signOut={signOut}
        />
        <PaymentPage path="payment-page" />
        <RegisterDNA path="register-dna" />
        <QuestionnairePage path="questionnaire-page/*" />
        <NotFound default />
        <DietBreakdown brief={"ysfadud"} path="diet-breakdown" />
      </Router>
      <Footer />
    </>
  );
};

export default Routes;
