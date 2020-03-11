import React, { useState } from "react";
import styles from "./QuestionnairePage.module.scss";
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
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
      <PageEight />
      <PageNine />
    </>
  );
};

export default QuestionnairePage;
