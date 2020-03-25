import React, { useState, useEffect } from "react";
import styles from "./QuestionnairePage.module.scss";
import { Router, Redirect, navigate } from "@reach/router";
import NotFound from "../NotFound";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";
import PageNine from "./PageNine";
import PageTen from "./PageTen";
import PageEleven from "./PageEleven";
import PageTwelve from "./PageTwelve";
import PageThirteen from "./PageThirteen";
import PageFourteen from "./PageFourteen";
import PageFifteen from "./PageFifteen";
import PageSixteen from "./PageSixteen";
import PageSeventeen from "./PageSeventeen";
import PageEighteen from "./PageEighteen";
import PageNineteen from "./PageNineteen";
import PageTwenty from "./PageTwenty";
import PageTwentyOne from "./PageTwentyOne";
import PageTwentyTwo from "./PageTwentyTwo";
import PageTwentyThree from "./PageTwentyThree";
import PageTwentyFour from "./PageTwentyFour";
import PageTwentyFive from "./PageTwentyFive";
import PageTwentySix from "./PageTwentySix";
import PageTwentySeven from "./PageTwentySeven";
import PageTwentyEight from "./PageTwentyEight";
import PageTwentyNine from "./PageTwentyNine";
import PageThirty from "./PageThirty";
import PageThirtyOne from "./PageThirtyOne";
import PageThirtyTwo from "./PageThirtyTwo";
import PageThirtyThree from "./PageThirtyThree";
import PageThirtyFour from "./PageThirtyFour";
import ConfirmationPage from "../ConfirmationPage";

import firebase, { provider, firestore } from "../../firebase";
import MockData from "../../data/index.json";

import ProgressBar from "../../components/ProgressBar";

const QuestionnairePage = () => {
  const [formValues, setFormValues] = useState({});

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const signInWithRedirect = () => {
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(() => {
        console.log(user);
        getUser();
      });
  };
  const getUser = () => {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        const user = result.user;

        setUser(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const addToDb = apiData => {
    firestore
      .collection("users")
      .doc(user.uid)
      .set({
        questionnaireAnswers: formValues,
        userApiData: apiData,
        priorityActions: MockData["user-dashboard"].priorities
      })
      .then(navigate("/confirmation-page"))
      .catch(err => console.log(err));
  };

  const submitAnswers = () => {
    const dataToPost = {
      geneticGuid: "12345-6789",
      reportType: "full",
      answers: formValues
    };

    const requestOptions = {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToPost)
    };
    fetch("http://api.codetechs.co.uk/pbhl/report", requestOptions)
      .then(response => response.json())
      .then(data => {
        addToDb(data);
      })
      .catch(error => console.log(error));
    console.log(dataToPost);
  };

  const keysLength = Object.keys(formValues).length;

  const percentage = Math.floor((keysLength / 59) * 100);
  useEffect(() => window.scrollTo(0, 0));

  return (
    <>
      <div className={styles.progressBar}>
        <ProgressBar value={percentage} />
      </div>
      <Router>
        <Redirect noThrow from="/" to="page-one" />
        <PageOne
          path="page-one"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwo
          path="page-two"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageThree
          path="page-three"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageFour
          path="page-four"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageFive
          path="page-five"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageSix
          path="page-six"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageSeven
          path="page-seven"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageEight
          path="page-eight"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageNine
          path="page-nine"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTen
          path="page-ten"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageEleven
          path="page-eleven"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwelve
          path="page-twelve"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageThirteen
          path="page-thirteen"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageFourteen
          path="page-fourteen"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageFifteen
          path="page-fifteen"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageSixteen
          path="page-sixteen"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageSeventeen
          path="page-seventeen"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageEighteen
          path="page-eighteen"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageNineteen
          path="page-nineteen"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwenty
          path="page-twenty"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwentyOne
          path="page-twenty-one"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwentyTwo
          path="page-twenty-two"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwentyThree
          path="page-twenty-three"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwentyFour
          path="page-twenty-four"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwentyFive
          path="page-twenty-five"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwentySix
          path="page-twenty-six"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwentySeven
          path="page-twenty-seven"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwentyEight
          path="page-twenty-eight"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageTwentyNine
          path="page-twenty-nine"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageThirty
          path="page-thirty"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageThirtyOne
          path="page-thirty-one"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageThirtyTwo
          path="page-thirty-two"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageThirtyThree
          path="page-thirty-three"
          masterValues={formValues}
          changeMaster={setFormValues}
        />
        <PageThirtyFour path="page-thirty-four" addToDb={submitAnswers} />
        <ConfirmationPage path="confirmation-page" />

        <NotFound default />
      </Router>
      <button onClick={signInWithRedirect}>You need to be signed it</button>
    </>
  );
};

export default QuestionnairePage;
