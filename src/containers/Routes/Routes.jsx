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
import Mockdata from "../../data";

const Routes = props => {
  const { signIn, signOut, user } = props;
  const [userData, setUserData] = useState(null);
  const [foods, setEverdayFoods] = useState([]);

  const fetchFoods = () => {
    if (user) {
      firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then(doc => {
          setEverdayFoods(doc.data().userApiData);
          // const retrievedItems = doc.data().userApiData);
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    fetchFoods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const everydayFoodsJSX = userData ? (
    <EverydayFoods
      infoHeaderBlack={item["food-stuffs"].name}
      infoHeaderPurple={}
      foodList={}
      path="everyday-foods"
    />
  ) : null;

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
        <Redirect noThrow from="/" to="landing-page" />
        <LandingPage
          path="landing-page"
          signInWithRedirect={signIn}
          user={user}
        />
        <PrivateRoutes path="/" user={user}>
          <PrioritiesPage
            path="priorities-page"
            user={user}
            signOut={signOut}
          />
          <PaymentPage path="payment-page" />
          <RegisterDNA path="register-dna" user={user} />
          <QuestionnairePage path="questionnaire-page/*" user={user} />
          {nutrientsJSX}
          {everydayFoodsJSX}
          <EverydayFoods path="everyday-foods" />
          <DietBreakdown brief={"ysfadud"} path="diet-breakdown" />
          <ConfirmationPage path="confirmation-page" />
        </PrivateRoutes>
        <NotFound default />
      </Router>
    </>
  );
};

export default Routes;
