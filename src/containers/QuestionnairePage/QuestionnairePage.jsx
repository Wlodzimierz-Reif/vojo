import React, { useState } from "react";
import styles from "./QuestionnairePage.module.scss";
import { Router, Redirect } from "@reach/router";
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

const QuestionnairePage = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="page-one" />
        <PageOne path="page-one" />
        <PageTwo path="page-two" />
        <PageThree path="page-three" />
        <PageFour path="page-four" />
        <PageFive path="page-five" />
        <PageSix path="page-six" />
        <PageSeven path="page-seven" />
        <PageEight path="page-eight" />
        <PageNine path="page-nine" />
        <PageTen path="page-ten" />
        <PageEleven path="page-eleven" />
        <PageTwelve path="page-twelve" />
        <PageThirteen path="page-thirteen" />
        <PageFourteen path="page-fourteen" />
        <NotFound default />
      </Router>
    </>
  );
};

export default QuestionnairePage;
