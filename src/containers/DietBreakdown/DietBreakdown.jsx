import React from "react";
import styles from "./DietBreakdown.module.scss";
import VegPictureBox from "../../components/VegPictureBox";
import DietVeg from "../../components/DietVeg";
import beet from "../../assets/characters/beetroot-1.svg";
import broc from "../../assets/characters/broccoli-1.svg";
import carrot from "../../assets/characters/carrot-1.svg";
import DietBreakdownBox from "../../components/DietBreakdownBox";
import SingleBreakdown from "../../components/SingleBreakdown";
import bean from "../../assets/characters/bean-1.svg"
const DietBreakdown = props => {
  const { brief, title } = props;

  const shortBrief =
    brief.length < 300 ? brief : brief.substring(0, 200) + "...";

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
                shortenedBrief={shortBrief} />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default DietBreakdown;
