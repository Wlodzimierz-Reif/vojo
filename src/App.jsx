import React from "react";
import styles from "./App.module.scss";
// import MaintenancePage from "./components/MaintenancePage";
import PriorityBox from "./components/PriorityBox";

const App = () => {
  const testObj = {
    priorityBoxNum: 1,
    priorityBoxHeading: "hello",
    priorityBoxLink: "https://github.com/",
    priorityBoxLinkText: "hello"
  };
  return (
    <div className={styles.maintenanceContainer}>
      {/* <MaintenancePage /> */}
      <PriorityBox props={testObj} />
    </div>
  );
};

export default App;
