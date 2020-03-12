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

const QuestionnairePage = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="pageone" />
        <PageOne path="pageone" />
        <PageTwo path="pagetwo" />
        <PageThree path="pagethree" />
        <PageFour path="pagefour" />
        <PageFive path="pagefive" />
        <PageSix path="pagesix" />
        <PageSeven path="pageseven" />
        <PageEight path="pageeight" />
        <PageNine path="pagenine" />
        {/* <NotFound default /> */}
      </Router>
    </>
  );
};

export default QuestionnairePage;
