import React from "react";
import styles from "./EverydayFoods.module.scss";
import InfoList from "../../components/InfoList";

const EverydayFoods = () => {
  return (
    <>
      <section className={styles.dietContainer}>
        <h3 className={styles.title}>Your go-to everyday foods</h3>
        <InfoList />
      </section>
    </>
  );
};

export default EverydayFoods;
