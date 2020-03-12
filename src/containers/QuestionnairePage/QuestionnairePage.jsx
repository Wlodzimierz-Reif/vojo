import React, { useState } from "react";
import styles from "./QuestionnairePage.module.scss";
import { Router, Redirect } from "@reach/router";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import PageEight from "./PageEight";
import PageNine from "./PageNine";
import NotFound from "../NotFound";

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
        <NotFound default />
      </Router>
    </>
  );
};

export default QuestionnairePage;
