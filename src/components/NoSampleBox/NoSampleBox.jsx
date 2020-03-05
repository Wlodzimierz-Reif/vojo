import React from "react";
import styles from "./NoSampleBox.module.scss";

const NoSampleBox = () => {



  return (
    <>
      <section className={styles.warningMessage}>
        <div>
          <h2>We don't have your genetic information yet</h2>
          <p>Close</p>
        </div>
        <p>
          You can still use the application but some functionality won't be
          available
        </p>
      </section>
    </>
  );
};

export default NoSampleBox;
