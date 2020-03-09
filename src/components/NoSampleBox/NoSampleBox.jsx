import React from "react";
import styles from "./NoSampleBox.module.scss";

const NoSampleBox = () => {



  return (
    <>
      <section className={styles.warningMessage}>
        <div>
          <h3>We don't have your genetic information yet</h3>
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
