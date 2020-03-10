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
      <QuestionnaireRadioButtons question="What is your biological sex?" />
      {/* <QuestionnaireCheckBoxes question="Which of the following best describes your current diet?" /> */}
      <QuestionnaireInputField question="How tall are you?" />
    </>
    // <div className={styles.maintenanceContainer}>
    //   <MaintenancePage />
    // </div>
  );
};

export default App;
