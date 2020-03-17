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
        <PageFifteen path="page-fifteen" />
        <PageSixteen path="page-sixteen" />
        <PageSeventeen path="page-seventeen" />
        <PageEighteen path="page-eighteen" />
        <PageNineteen path="page-nineteen" />
        <PageTwenty path="page-twenty" />
        <PageTwentyOne path="page-twenty-one" />
        <PageTwentyTwo path="page-twenty-two" />
        <PageTwentyThree path="page-twenty-three" />
        <PageTwentyFour path="page-twenty-four" />
        <PageTwentyFive path="page-twenty-five" />
        <PageTwentySix path="page-twenty-six" />
        <PageTwentySeven path="page-twenty-seven" />
        <PageTwentyEight path="page-twenty-eight" />
        <PageTwentyNine path="page-twenty-nine" />
        <PageThirty path="page-thirty" />
        <PageThirtyOne path="page-thirty-one" />
        <PageThirtyTwo path="page-thirty-two" />
        <PageThirtyThree path="page-thirty-three" />

        <NotFound default />
      </Router>
    </>
  );
};

export default QuestionnairePage;
