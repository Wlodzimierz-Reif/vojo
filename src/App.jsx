import React from "react";
import styles from "./App.module.scss";
import MaintenancePage from "./components/MaintenancePage";
import Button from "./components/Button";

const App = () => {
  return (
    <div className={styles.maintenanceContainer}>
      <MaintenancePage />
    </div>
  );
};

export default App;
