import React from "react";
import styles from "./DietBreakdown.module.scss";
import beet from "../../assets/characters/beetroot-1.svg";
import broc from "../../assets/characters/broccoli-1.svg";
import carrot from "../../assets/characters/carrot-1.svg";
import DietBreakdownBox from "../../components/DietBreakdownBox";
import SingleBreakdown from "../../components/SingleBreakdown";
import bean from "../../assets/characters/bean-1.svg";
import strawberry from "../../assets/characters/strawberry-1.svg";
import peanut from "../../assets/characters/peanut-1.svg";

const DietBreakdown = props => {
  const { userApiData } = props;
  console.log(userApiData);

  const text =
    userApiData["personalised-recommendations"]["weight-management-actions"][0];

  const shortBrief = text.length < 300 ? text : text.substring(0, 200) + "...";

  return (
    <>
      <div className={styles.secInfo}>
        <section className={styles.information}>
          <h2 className={styles.title}>Your diet breakdown</h2>
          <section className={styles.breakdowns}>
            <div className={styles.singleBreakdown}>
              <DietBreakdownBox
                image1={carrot}
                image2={broc}
                image3={beet}
                shortenedBrief={shortBrief}
              />
            </div>
            <div className={styles.singleBreakdown}>
              <SingleBreakdown
                image1={bean}
                boxText={"Protein 4+ per day"}
                shortenedBrief={shortBrief}
                pictureTextInside={"Beans lentils tofu and quinoa"}
              />
            </div>
            <div className={styles.singleBreakdown}>
              <SingleBreakdown
                image1={strawberry}
                boxText={"Fruits 1-2 per day"}
                pictureTextInside={"Citrus fruit and berries"}
              />
            </div>
            <div className={styles.singleBreakdown}>
              <SingleBreakdown
                image1={peanut}
                boxText={"Fats 2-3 portion per day"}
                shortenedBrief={shortBrief}
                pictureTextInside={"Avocado, olives, nuts and seeds"}
              />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default DietBreakdown;
