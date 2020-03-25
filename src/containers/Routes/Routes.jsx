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
<<<<<<< HEAD
import MealIdeas from "../MealIdeas";
=======
import DietBreakdown from "../DietBreakdown";
>>>>>>> 1bfa2622137933593fba60fc858c210d52f2f114

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
          <EverydayFoods path="everyday-food" />
          <PaymentPage path="payment-page" />
          <RegisterDNA path="register-dna" />
          <QuestionnairePage path="questionnaire-page/*" />
          <DietBreakdown brief={"ysfadud"} path="diet-breakdown" />
        </PrivateRoutes>
      </Router>
    </>
  );
};

export default Routes;
