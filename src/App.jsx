import React from "react";
import styles from "./App.module.scss";
import MaintenancePage from "./components/MaintenancePage";
import PrioritiesPage from "./containers/PrioritiesPage";

const App = () => {
  const exampleLinks = [
    "Priorities",
    "Nutrients",
    "Diet",
    "Health",
    "Genetics",
    "Answers",
    "Settings"
  ];

  const testObj = {
    priorityBoxNum: 1,
    priorityBoxHeading: "Priority Box",
    priorityBoxLink: "https://github.com/",
    priorityBoxLinkText: "Here is a link"
  };

  return (
    //   <div className={styles.maintenanceContainer}>
    //     <MaintenancePage />
    //   </div>
    //

    <>
      <PrioritiesPage haveSample={false} />
    </>
  );
};

export default App;
