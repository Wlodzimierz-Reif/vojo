import React, { useState, useEffect } from "react";
// import styles from "./Routes.module.scss";
import PrivateRoutes from "../PrivateRoutes";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import QuestionnairePage from "../QuestionnairePage";
import PrioritiesPage from "../PrioritiesPage";
import PaymentPage from "../PaymentPage/PaymentPage";
import RegisterDNA from "../RegisterDNA";
import EverydayFoods from "../EverydayFoods";
import DietBreakdown from "../DietBreakdown";
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
          setUserData(doc.data().userApiData);
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const nutrientsJSX = userData ? (
    <NutrientsPage nutrients={userData.nutrients} path="nutrients-page" />
  ) : null;

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="home-page" />
        <HomePage
          path="home-page"
          signInWithRedirect={signIn}
          signOut={signOut}
        />
        <PrivateRoutes path="/" user={user}>
          <PrioritiesPage
            path="priorities-page"
            signInWithRedirect={signIn}
            signOut={signOut}
          />
          <PaymentPage path="payment-page" />
          <RegisterDNA path="register-dna" user={user} />
          <EverydayFoods path="everyday-foods" />
          <QuestionnairePage path="questionnaire-page/*" />
          {nutrientsJSX}
          <DietBreakdown brief={"ysfadud"} path="diet-breakdown" />
        </PrivateRoutes>
        <NotFound default />
      </Router>
    </>
  );
};

export default Routes;
