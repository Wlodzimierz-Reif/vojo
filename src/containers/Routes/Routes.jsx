import React, { useState, useEffect } from "react";
// import styles from "./Routes.module.scss";
import PrivateRoutes from "../PrivateRoutes";
import { Router, Redirect } from "@reach/router";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import QuestionnairePage from "../QuestionnairePage";
import PrioritiesPage from "../PrioritiesPage";
import PaymentPage from "../PaymentPage/PaymentPage";
import RegisterDNA from "../RegisterDNA";
import EverydayFoods from "../EverydayFoods";
import DietBreakdown from "../DietBreakdown";
import ConfirmationPage from "../ConfirmationPage";
import LandingPage from "../LandingPage";
import { firestore } from "../../firebase";

const Routes = props => {
  const { signIn, signOut, user } = props;
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    if (user) {
      firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then(doc => {
          setUserData(doc.data());
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const nutrientsJSX =
    userData && userData.userApiData ? (
      <NutrientsPage
        nutrients={userData.userApiData.nutrients}
        path="nutrients-page"
      />
    ) : null;

  const dietBreakdownJSX =
    userData && userData.userApiData ? (
      <DietBreakdown userApiData={userData.userApiData} path="diet-breakdown" />
    ) : null;

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="landing-page" />
        <LandingPage
          path="landing-page"
          signInWithRedirect={signIn}
          user={user}
        />
        <PrivateRoutes path="/">
          <PrioritiesPage path="priorities-page" signOut={signOut} />
          <PaymentPage path="payment-page" />
          <RegisterDNA path="register-dna" user={user} />
          <EverydayFoods path="everyday-foods" />
          <QuestionnairePage path="questionnaire-page/*" user={user} />
          {nutrientsJSX}
          {dietBreakdownJSX}
          <ConfirmationPage path="confirmation-page" />
        </PrivateRoutes>
        <NotFound default />
      </Router>
    </>
  );
};

export default Routes;
