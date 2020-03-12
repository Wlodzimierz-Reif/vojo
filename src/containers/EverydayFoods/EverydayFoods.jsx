import React from "react";
import styles from "./EverydayFoods.module.scss";
import InfoList from "../../components/InfoList";
import Image from "../../assets/characters/characters-together.svg";

const EverydayFoods = () => {
  return (
    <>
      <div className={styles.listImage}>
        <section className={styles.dietContainer}>
          <h3 className={styles.title}>Your go-to everyday foods</h3>
          <InfoList />
          <InfoList />
          <InfoList />
          <InfoList />
          <InfoList />
        </section>
        <img src={Image} alt="characters-together" />
      </div>
    </>
  );
};

export default EverydayFoods;
