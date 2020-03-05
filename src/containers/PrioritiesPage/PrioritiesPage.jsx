import React from "react";
import styles from "./PrioritiesPage.module.scss";
import NoSampleBox from "../../components/NoSampleBox"

const PrioritiesPage = props => {
  const { image } = props;

  return (
    <section className={styles.prioritiesPage}>
      {/* <NavBar /> */}
      <h2>Priorities</h2>
      <NoSampleBox />
      <div>
        <div>
          <p>Your nutrients</p>
          <p>THE ARROW</p>
        </div>
        <h3>Get Some Nutrients!</h3>
      </div>
      <p>
        Here's a detailed break down of exactly what you need to do to up your
        nutrient intake and improve your health!
      </p>
      <section className={styles.priorityBoxesSection}>
        {/* <PriorityBox />
        <PriorityBox />
        <PriorityBox /> */}
      </section>
      <img src={image} alt="Vegetable person" />
    </section>
  );
};

export default PrioritiesPage;
