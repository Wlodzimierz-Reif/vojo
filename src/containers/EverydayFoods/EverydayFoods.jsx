import React, { useState, useEffect } from "react";
import styles from "../EverydayFoods/EverydayFoods.module.scss";
import InfoList from "../../components/InfoList";
import Image from "../../assets/characters/pickle-2.svg";

const EverydayFoods = props => {
  const { everydayFoods } = props;

  const getItemJsx = array => {
    return array.map(item => (
      <InfoList
        infoHeaderBlack={item.name}
        infoHeaderPurple={item.recommendation}
        foodList={item["intolerance-action"]}
      />
    ));
  };

  return (
    <div className={styles.listImage}>
      <section className={styles.dietContainer}>
        <h3 className={styles.title}>Your go-to everyday foods</h3>
        {getItemJsx(everydayFoods)}
        <img src={Image} alt="" />
      </section>
    </div>
  );
};

export default EverydayFoods;
