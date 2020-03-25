import React, { useState, useEffect } from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import QuestionnairePage from "../QuestionnairePage";
import PrioritiesPage from "../PrioritiesPage";
import Footer from "../../components/Footer";
import PaymentPage from "../PaymentPage/PaymentPage";
import mockData from "../../data";
import RegisterDNA from "../RegisterDNA";
import DietBreakdown from "../DietBreakdown";
import { firestore } from "../../firebase";
import firebase, { provider } from "../../firebase";

const Routes = props => {
  const { signIn, signOut, user } = props;
  const [userData, setUserData] = useState();

  // Any object, any key that contains the words
  // "recommendation" or "action" place into
  // new recommendations array

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
  }, []);

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="priorities-page" />
        <HomePage path="home-page" />
        <NutrientsPage nutrients={userData.nutrients} path="nutrients-page" />
        <PrioritiesPage
          path="priorities-page"
          signInWithRedirect={signIn}
          signOut={signOut}
        />
        <PaymentPage path="payment-page" />
        <RegisterDNA path="register-dna" user={user} />
        <QuestionnairePage path="questionnaire-page/*" />
        <NotFound default />
        <DietBreakdown brief={"ysfadud"} path="diet-breakdown" />
      </Router>
      <Footer />
    </>
  );
};

export default Routes;
// const [user, setUser] = useState(null);

// const signInWithRedirect = () => {
//   firebase
//     .auth()
//     .signInWithRedirect(provider)
//     .then(() => {
//       getUser();
//     });
// };

// const getUser = () => {
//   firebase
//     .auth()
//     .getRedirectResult()
//     .then(result => {
//       const user = result.user;
//       setUser(user);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.email;
//       const credential = error.credential;
//       console.log(errorCode, errorMessage, email, credential);
//     });
// };

// const addToDb = () => {
//   firestore
//     .collection("users")
//     .doc(user.uid)
//     .set({
//       userApiData: mockData
//     })
//     .then(() => {
//       console.log(user.uid.userApiData);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
