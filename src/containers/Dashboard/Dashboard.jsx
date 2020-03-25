import React from "react";
import styles from "./Dashboard.module.scss";
import NavBar from "../../components/NavBar";
import data from "../../data/index.json";
import Button from "../../components/Button";
import blueberry from "../../assets/characters/blueberry-1.svg";
import beetroot from "../../assets/characters/beetroot-1.svg";
import apple from "../../assets/characters/apple-1.svg";
import butternut from "../../assets/characters/butternut-1.svg";
import banana from "../../assets/characters/banana-1.svg";



const Dashboard = (props) => {
  // const {} = props;

  return (
    <>
      <section className={styles.entirePage}>
        {/* <div className={styles.stickyTop}></div> */}
        <NavBar />
        <div className={styles.mainPage}>
          <section>
            <h2>Hey {data["user-dashboard"]["first-name"]}</h2>
            <div className={styles.healthScore}>
              <p>
Your vegan health score:               </p>
              <ul>
                <li>Pay for membership</li>
                <li>Take lifestyle questionaire</li>
                <li>Take genetic test</li>
              </ul>
            </div>
            <div className={styles.nextSteps}>
              <h3>1. Pay up!</h3>
              <p>To get you started we need you to pay for the service, this is a put payment information here.</p>
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
            <div className={styles.fruitPeople}>
              <img src={blueberry} alt="blueberry person"/>
              <img className={styles.beetRoot} src={beetroot} alt="beetroot person"/>
              <img src={apple} alt="apple person"/>
              <img src={butternut} alt="butternut person"/>
              <img src={banana} alt="banana person"/>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
