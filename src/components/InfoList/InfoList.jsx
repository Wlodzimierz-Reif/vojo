import React from "react";
import styles from "./InfoList.module.scss";

const InfoList = () => {
  return (
    <>
      <section className={styles.infoList}>
        <h4>
          <span className={styles.blackText}>Plant milk:</span>
          <span className={styles.purpleText}> Coconut</span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore,
          ipsam accusamus inventore expedita labore consequuntur eaque natus
          corrupti impedit, consectetur blanditiis vero. Repellendus nemo
          accusamus aperiam perspiciatis optio eaque?
        </p>
      </section>
    </>
  );
};

export default InfoList;
