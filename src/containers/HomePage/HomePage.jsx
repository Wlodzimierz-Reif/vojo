import React from "react";
import styles from "./HomePage.module.scss";
import MaintenancePage from "../../components/MaintenancePage";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div>
      <Link to="../priorities-page">Priorities Page</Link>

      <div className={styles.maintenanceContainer}>
        <MaintenancePage />
      </div>
    </div>
  );
};

export default HomePage;
