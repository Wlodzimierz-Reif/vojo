import React from "react";
import styles from "./ConfirmationPage.module.scss";
import Button from "../../components/Button";
import { Link } from "@reach/router";
// import PayButton from "../../components/PayButton/PayButton";

const ConfirmationPage = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.box}>
          <h1>Your answers have been submitted !</h1>
          <h3>Thank you for taking the time to fill in the questionnaire !</h3>
          <Link to="/home-page">
            <div className={styles.btn}>
              <Button btnText="Go to dashboard" />
              {/* <PayButton btnText="Go to dashboard" isPaypal={false} /> */}
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ConfirmationPage;
