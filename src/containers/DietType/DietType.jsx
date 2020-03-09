import React from "react";
import styles from "./DietType.module.scss";
import VegPersonBox from "../../components/VegPersonBox";
import Image2 from "../../assets/characters/broccoli-1.svg";
import Image from "../../assets/characters/bean-2.svg";

const DietType = props => {
  const foodArray = ["Beans", "Lentils", "Greens (peas, spinach, etc.)"];
  const { regionText, dietText } = props;
  return (
    <>
      {/* <h2>Diet</h2> */}
      <section className={styles.dietType}>
        <div className={styles.dietTextBox}>
          <h2 className={styles.header}>Your diet type: </h2>
          <h2 className={styles.region}>{regionText}</h2>
          <p>{dietText}</p>
        </div>
        <div className={styles.vegbox}>
          <VegPersonBox
            isPrimary
            image={Image2}
            h3Text="This is the title"
            pText="Your genotype suggests you have a high need for folate. Beans, lentils and green vegetables are high in folate. Go for 5+ portions per day of:"
            food = {foodArray}
          />
        </div>
        <div className={styles.vegbox}>
          <VegPersonBox
            isPrimary
            image={Image}
            h3Text="This is the title"
            pText="This is a long paragraph, this is a long paragraph, this is a long paragraph"
          />
        </div>
      </section>
    </>
  );
};

export default DietType;
