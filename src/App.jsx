import React, { useState } from "react";
import styles from "./App.module.scss";
// import MaintenancePage from "./components/MaintenancePage";
import QuestionnaireRadioButtons from "./containers/QuestionnaireRadioButtons";
import QuestionnaireCheckBoxes from "./containers/QuestionnaireCheckBoxes";
import QuestionnaireInputField from "./containers/QuestionnaireInputField";

const App = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <>
      <QuestionnaireRadioButtons question="Which of the following best describes your current diet?" />
      <QuestionnaireCheckBoxes question="Which of the following best describes your current diet?" />
      <QuestionnaireInputField question="Which of the following best describes your current diet?" />
    </>
    // <div className={styles.maintenanceContainer}>
    //   <MaintenancePage />
    // </div>
  );
};

export default App;
