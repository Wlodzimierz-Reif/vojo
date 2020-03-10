import React from "react";
import styles from "./HomePage.module.scss";
import MaintenancePage from "../../components/MaintenancePage";

const HomePage = () => {
  return (
    <div className={styles.maintenanceContainer}>
      <MaintenancePage />
    </div>
  );
};

export default HomePage;
