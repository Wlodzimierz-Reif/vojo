import React from "react";
// import styles from "./Routes.module.scss";
import PrivateRoutes from "../PrivateRoutes";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import QuestionnairePage from "../QuestionnairePage";
import PrioritiesPage from "../PrioritiesPage";
import PaymentPage from "../PaymentPage/PaymentPage";
import mockData from "../../data";
import RegisterDNA from "../RegisterDNA";
import EverydayFoods from "../EverydayFoods";
import DietBreakdown from "../DietBreakdown";

const Routes = props => {
  const { signIn, signOut, user } = props;
  // Any object, any key that contains the words
  // "recommendation" or "action" place into
  // new recommendations array

  return (
    <>
      <Router>
        <HomePage
          path="home-page"
          signInWithRedirect={signIn}
          signOut={signOut}
        />
        <NotFound default />
        <Redirect noThrow from="/" to="home-page" />

        <PrivateRoutes path="/" user={user}>
          <NutrientsPage nutrients={mockData.nutrients} path="nutrients-page" />
          <PrioritiesPage
            path="priorities-page"
            signInWithRedirect={signIn}
            signOut={signOut}
          />
          <PaymentPage path="payment-page" />
          <EverydayFoods path="everyday-foods" />
          <RegisterDNA path="register-dna" />

          <DietBreakdown brief={"ysfadud"} path="diet-breakdown" />
        </PrivateRoutes>
        <QuestionnairePage path="questionnaire-page/*" />
      </Router>
    </>
  );
};

export default Routes;
