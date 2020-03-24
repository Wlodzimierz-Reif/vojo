import React from "react";
import styles from "./Dashboard.module.scss";
import NavBar from "../../components/NavBar";
import data from "../../data/index.json";
import Button from "../../components/Button";

const Dashboard = (props) => {
  // const {} = props;

  return (
    <>
      <section className={styles.entirePage}>
        <nav><NavBar /></nav>
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
            <div className={styles.nextSteps}>
              <h3>1. Pay up!</h3>
              <Button btnText={"Pay now"} />
            </div>
            <div className={styles.nextSteps}>
              <h3>2. Answer some quick questions about you</h3>
              <p>To get the most accurate results we need you to take a lifestyle questionnaire</p>
              <Button btnText={"Take questionnaire"} />
            </div>
            <div className={styles.nextSteps}>
              <h3>3. Register your test kit & send us your saliva</h3>
              <p>To get the most accurate results we need you to take a lifestyle questionnaire</p>
              <Button btnText={"Take test"} />
            </div>
            
          </section>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
