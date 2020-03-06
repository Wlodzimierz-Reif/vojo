import React from "react";
import styles from "./App.module.scss";
import MaintenancePage from "./components/MaintenancePage";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <>
      <div className={styles.maintenanceContainer}>
        <MaintenancePage />
      </div>
    </>
  );
};

export default App;
