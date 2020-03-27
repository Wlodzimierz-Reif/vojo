import React from "react";
import styles from "./Dashboard.module.scss";
import NavBar from "../../components/NavBar";
import data from "../../data/index.json";
import Button from "../../components/Button";
import broccoli from "../../assets/characters/broccoli-2.svg";
import blueberry from "../../assets/characters/blueberry-1.svg";
import blueberryTwo from "../../assets/characters/blueberry-2.svg";
import beetroot from "../../assets/characters/beetroot-1.svg";
import apple from "../../assets/characters/apple-1.svg";
import butternut from "../../assets/characters/butternut-1.svg";
import banana from "../../assets/characters/banana-1.svg";
import PriorityBox from "../../components/PriorityBox";
import { render } from "react-dom";

const Dashboard = props => {
  // const {userData} = props;

  const priorities = data["user-dashboard"].priorities;

  // let prioritiesData = [];

  // const printPriorities = () => {
  //   // render() {
  //   // for (
  //   //   let prioNum = 0;
  //   //   prioNum < data["user-dashboard"].priorities.length;
  //   //   prioNum++
  //   // ) {
  //     // <PriorityBox />);
  //     // const prioritiesArray = data["user-dashboard"].priorities.map(prio => [
  //     //   prioNum + 1,
  //     //   prio.name,
  //     //   prio.action
  //     // ]);
  //     // prioritiesData
  //   }
  // }
  // };

  return (
    <>
      <section className={styles.entirePage}>
        {/* <div className={styles.stickyTop}></div> */}
        <NavBar />
        <div className={styles.mainPage}>
          <section>
            <h2>Hey {data["user-dashboard"]["first-name"]}</h2>
            <div className={styles.healthScore}>
              <p>Your vegan health score: </p>
              <h2>
                {data["user-dashboard"]["vegan-health-score"]}
                <span>%</span>
              </h2>
              <span>
                {data["user-dashboard"]["vegan-health-score-message"]}
              </span>
            </div>
            <div className={styles.planOfAction}>
              <h3>Your plan of action</h3>
              <img src={blueberryTwo} alt="" />
            </div>
            <div className={styles.prioBox}>
              {/* {printPriorities()} */}
              <PriorityBox
                className={styles.prioBox}
                prioNum={1}
                prioHead={priorities[0].action}
                prioText={priorities[0].description}
              />
            </div>
            <div className={styles.prioBox}>
              <PriorityBox
                className={styles.prioBox}
                prioNum={2}
                prioHead={priorities[1].action}
                prioText={priorities[1].description}
              />
            </div>
            <div className={styles.prioBox}>
              <PriorityBox
                className={styles.prioBox}
                prioNum={3}
                prioHead={priorities[2].action}
                prioText={priorities[2].description}
              />
            </div>
            <div className={styles.dietPlan}>
              <h3>Unlock your mealtime mojo</h3>
              <div>
                <div className={`${styles.mojoBox} ${styles.dietType}`}>
                  <p>Your vegan diet type:</p>
                  <h4>{data["user-dashboard"]["diet-type"].name}</h4>
                  <img src={broccoli} alt="" />
                  <Button btnText={"View my diet plan"} />
                </div>
                <div className={styles.mojoBox}>
                  <h5>Your supplement plan (get yours now)</h5>
                  <ol>
                    <li>{data["user-dashboard"]["diet-type"].name}</li>
                    <li></li>
                    <li></li>
                  </ol>
                </div>
                <div className={styles.mojoBox}></div>
              </div>
            </div>
            <div className={styles.fruitPeople}>
              <img src={blueberry} alt="blueberry person" />
              <img
                className={styles.beetRoot}
                src={beetroot}
                alt="blueberry person"
              />
              <img src={apple} alt="blueberry person" />
              <img src={butternut} alt="blueberry person" />
              <img className={styles.banana} src={banana} alt="banana person" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
