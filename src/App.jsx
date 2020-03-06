import React from "react";
import styles from "./App.module.scss";
import MaintenancePage from "./components/MaintenancePage";

const App = () => {
  return (
    <div className={styles.maintenanceContainer}>
      <p>Hello world</p>
      <MaintenancePage />
    </div>
  );
};

export default App;
