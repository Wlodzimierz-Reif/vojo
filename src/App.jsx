import React, { useState } from "react";
import styles from "./App.module.scss";
// import MaintenancePage from "./components/MaintenancePage";
// import QuestionnaireRadioButtons from "./containers/QuestionnaireRadioButtons";
// import QuestionnaireCheckBoxes from "./containers/QuestionnaireCheckBoxes";
// import QuestionnaireInputField from "./containers/QuestionnaireInputField";
import InputField from "./components/InputField";
import InputLabel from "./components/InputLabel";
import RadioButton from "./components/RadioButton";
import CheckBox from "./components/CheckBox";
import PageOne from "./containers/QuestionnairePages/PageOne/PageOne";

const App = () => {
  return (
    <>
      <PageOne />
    </>
  );
};

export default App;

{
  /* // <div className={styles.maintenanceContainer}>
    //   <MaintenancePage />
    // </div> */
}
