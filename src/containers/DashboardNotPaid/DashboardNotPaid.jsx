import React from "react";
import {navigate} from "@reach/router";
import styles from "./DashboardNotPaid.module.scss";
import NavBar from "../../components/NavBar";
import data from "../../data/index.json";
import Button from "../../components/Button";
import blueberry from "../../assets/characters/blueberry-1.svg";
import beetroot from "../../assets/characters/beetroot-1.svg";
import apple from "../../assets/characters/apple-1.svg";
import butternut from "../../assets/characters/butternut-1.svg";
import banana from "../../assets/characters/banana-1.svg";



const DashboardNotPaid = (props) => {
  // const {} = props;

  const navigateToNext = () => {
    navigate("/payment-page");
  };

  return (
    <>
      <section className={styles.entirePage}>
        <NavBar />
        <div className={styles.mainPage}>
          <section>
            <h2>Hey {data["user-dashboard"]["first-name"]}, get to know your inner vegan</h2>
            <div className={styles.toDoNext}>
              <h3>What you need to do next</h3>
              <p>
              There are some things you need to complete before you have full access to the application!
              </p>
              <ul>
                <li>Pay for membership</li>
                <li>Take lifestyle questionaire</li>
                <li>Take genetic test</li>
              </ul>
            </div>
            <div className={`${styles.nextSteps} ${styles.stepOne}`}>
              <h3>1. Pay up!</h3>
              <Button handleClick={() => navigate("/payment-page")} btnText={"Pay now"} />
            </div>
            <div className={`${styles.nextSteps} ${styles.stepTwo}`}>
              <h3>2. Answer some quick questions about you</h3>
              <Button btnText={"Take questionnaire"} />
            </div>
            <div className={`${styles.nextSteps} ${styles.stepThree}`}>
              <h3>3. Register your test kit & send us your saliva</h3>
              <Button btnText={"Take test"} />
            </div>
            <div className={styles.fruitPeople}>
              <img src={blueberry} alt="blueberry person"/>
              <img src={beetroot} alt="blueberry person"/>
              <img src={apple} alt="blueberry person"/>
              <img src={butternut} alt="blueberry person"/>
              <img src={banana} alt="banana person"/>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default DashboardNotPaid;
