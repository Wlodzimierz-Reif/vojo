import React from "react";
import styles from "./UnderContructionPage.module.scss";
import strawBerry from "../../assets/characters/strawberry-1.svg";
import butternut from "../../assets/characters/butternut-1.svg";
import technicalSupport from "../../assets/other-sgvs/technical-support.svg";
import PayButton from "../../components/PayButton/PayButton";
// import alert from "../../assets/other-sgvs/alert.svg";

const UnderContructionPage = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.box}>
          <h1>Oops... Page under construction...</h1>
          <h2>Coming soon...</h2>
          <div className={styles.btn}>
            <PayButton btnText="Return to Home Page" isPaypal={true} />
          </div>
        </div>
        <img className={styles.leftImg} src={strawBerry} />
        <img className={styles.rightImg} src={butternut} />
        <img className={styles.techSupport} src={technicalSupport} />
        {/* <img className={styles.alert} src={alert} /> */}
      </section>
    </>
  );
};

export default UnderContructionPage;
