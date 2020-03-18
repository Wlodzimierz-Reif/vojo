import React from "react";
import styles from "./SingleBreakdown.module.scss";
// import PrioritiesPage from "../../containers/PrioritiesPage";
import VegPictureBox from "../VegPictureBox";

const SingleBreakdown = props => {
  const { shortenedBrief, image1, boxText } = props;

  return (
    <>
      <section className={styles.breakdownBox1}>
          <p>{boxText}</p>
        <section className={styles.imgs}>
          <div className={styles.primary}>
            <VegPictureBox pText={"Bean, lentils, tofu and quinoa"} image={image1} />
          </div>
        </section>
        <p className={styles.vegBrief}>{shortenedBrief}</p>
      </section>
    </>
  );
};

export default SingleBreakdown;
