import React, { useState } from "react";
import styles from "./PageThirtyFour.module.scss";
import Image from "../../../assets/characters/characters-together.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import Button from "../../../components/Button";
import { Link } from "@reach/router";

const PageThirtyFour = props => {
  const { addToDb, isShown } = props;

  const displayLoadingBox = isShown ? (
    <div className={styles.loadingBox}>
      <h3>Loading...please wait...</h3>
      <div className={styles.loader}></div>
    </div>
  ) : null;

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-thirty-three">
            <img className={styles.leftArrow} src={Arrow} alt="arrow" />
          </Link>
        </div>
        <h2>
          Thanks for completing the form. We will process your information and
          be in touch with your results
        </h2>
        <div className={styles.button}>
          <Button handleClick={addToDb} btnText="Submit" />
        </div>
        {displayLoadingBox}
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirtyFour;
