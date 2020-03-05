import React from "react";
import styles from "./App.module.scss";
import MaintenancePage from "./components/MaintenancePage";


const App = () => {
  return (
    <div className={styles.maintenanceContainer}>
      <MaintenancePage />
    </div>
  );
};

export default App;
