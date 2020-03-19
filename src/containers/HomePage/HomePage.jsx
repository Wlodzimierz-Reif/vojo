import React from "react";
import styles from "./HomePage.module.scss";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div>
      <Link to="../priorities-page">Priorities Page</Link>
      <Link to="../register-dna">Register your DNA</Link>

      <div className={styles.maintenanceContainer}>
        {/* <MaintenancePage /> */}
      </div>
    </div>
  );
};

export default HomePage;
