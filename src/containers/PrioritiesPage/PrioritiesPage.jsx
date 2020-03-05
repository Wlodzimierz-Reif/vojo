import React from "react";
import styles from "./PrioritiesPage.module.scss";

const PrioritiesPage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <h2>Priorities</h2>
      <p>Your nutrients (arrow)</p>
      <h2>Get Some Nutrients!</h2>
      <p>
        Here's a detailed break down of exactly what you need to do to up your
        nutrient intake and improve your health!
      </p>
      <section className={styles.priorityBoxes}>
        <PriorityBox />
        <PriorityBox />
        <PriorityBox />
      </section>
      <img src="" alt="" />
    </>
  );
};

export default PrioritiesPage;
