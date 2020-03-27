import React from "react";
import { Link } from "@reach/router";
import Button from "../../components/Button";
import styles from "./IncompletePage.module.scss";

const IncompletePage = (props) => {
  const {text} = props
  return (
    <>
      <section className={styles.container}>
        <div className={styles.box}>
          <h2>Oh no! You currently dont have any data</h2>
          <h3>You might like to fill in the {text}</h3>
          <Link to={`/${text}-page`}>
            <div className={styles.btn}>
              <Button btnText={`Go to ${text}`}/>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default IncompletePage;
