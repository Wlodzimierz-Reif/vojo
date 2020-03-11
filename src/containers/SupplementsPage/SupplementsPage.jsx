import React from "react";
import styles from "./SupplementsPage.module.scss";
import InfoCard from "../../components/InfoCard";

const SupplementsPage = () => {
  return (
    <section className={styles.supplementsPage}>
      <div className={styles.supplementsList}>
      <h2>Supplements</h2>

      </div>
      <div className={styles.supplementsWarnings}>
        <div className={styles.warningContainer}>
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default SupplementsPage;
