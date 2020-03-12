import React, { useState } from "react";
import styles from "./PrioritiesPage.module.scss";
import NoSampleBox from "../../components/NoSampleBox";
import PriorityBox from "../../components/PriorityBox";
import NavBar from "../../components/NavBar";
import Image from "../../assets/characters/beetroot-2.svg";
import Arrow from "../../assets/graphic-devices/primary-col-arrow-1.svg";
import { Link } from "@reach/router";


const PrioritiesPage = props => {
  const { haveSample } = props;

  const [isPromptShown, togglePromptShown] = useState(haveSample);

  const setSampleBoxVisibility = isPromptShown ? styles.hideNoSampleBox : "";

  return (
    <>
      <NavBar links={["Food"]} />
      <section className={styles.prioritiesPage}>
        <h2>Priorities</h2>
        <div className={`${styles.noSampleBox} ${setSampleBoxVisibility}`}>
          <NoSampleBox closeBox={() => togglePromptShown(!isPromptShown)} />
        </div>
        <div>
          <div className={styles.yourNutrients}>
            <h3>Get Some Nutrients!</h3>
            <div>
              <p>Your nutrients</p>
              
              <Link to="../nutrients-page"><img src={Arrow} alt="Right arrow" className={styles.arrow} /></Link>
            </div>
          </div>
        </div>
        <p>
          Here's a detailed break down of exactly what you need to do to up your
          nutrient intake and improve your health!
        </p>
        <section className={styles.priorityBoxesSection}>
          <div className={styles.priorityCardContainer}>
            <PriorityBox
              priorityBoxNum={"1"}
              priorityBoxHeading={"Food"}
              priorityBoxText={"The box's text"}
              priorityBoxLink={"unset-link"}
              priorityBoxLinkText={"The text for the link"}
            />
          </div>
          <div className={styles.priorityCardContainer}>
            <PriorityBox
              priorityBoxNum={"2"}
              priorityBoxHeading={"Food"}
              priorityBoxText={"The box's text"}
              priorityBoxLink={"unset-link"}
              priorityBoxLinkText={"The text for the link"}
            />
          </div>
          <div className={styles.priorityCardContainer}>
            <PriorityBox
              priorityBoxNum={"3"}
              priorityBoxHeading={"Food"}
              priorityBoxText={"The box's text"}
              priorityBoxLink={"unset-link"}
              priorityBoxLinkText={"The text for the link"}
            />
          </div>
        </section>
        <div className={styles.vegPerson}>
          <img src={Image} alt="Vegetable person" />
        </div>
      </section>
    </>
  );
};

export default PrioritiesPage;
