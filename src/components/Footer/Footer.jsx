import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.titles}>
          <p className={styles.title}>FACEBOOK</p>
          <p className={styles.title}>YOUR PROFILE</p>
          <p className={styles.title}>SETTINGS</p>
          <p className={styles.title}>LEGAL</p>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <p>Join the Facebook group!</p>
          </div>
          <div>
            <p>Your Diet Type</p>
            <p>Your Genetics</p>
            <p>Your Nutrient Breakdown</p>
            <p>Your Answers</p>
          </div>
          <div>
            <p>Settings</p>
          </div>
          <div>
            <p>Legal stuff</p>
            <p>T&Cs</p>
            <p>Ask a question</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
