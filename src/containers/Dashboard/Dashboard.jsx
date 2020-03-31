import React from "react";
import styles from "./Dashboard.module.scss";
import NavBar from "../../components/NavBar";
import data from "../../data/index.json";
import arrow from "../../assets/graphic-devices/white-arrow-1.svg";
import Button from "../../components/Button";
import broccoli from "../../assets/characters/broccoli-2.svg";
import blueberry from "../../assets/characters/blueberry-1.svg";
import blueberryTwo from "../../assets/characters/blueberry-2.svg";
import beetroot from "../../assets/characters/beetroot-1.svg";
import beetrootTwo from "../../assets/characters/beetroot-2.svg";
import apple from "../../assets/characters/apple-1.svg";
import butternut from "../../assets/characters/butternut-1.svg";
import banana from "../../assets/characters/banana-1.svg";
import PriorityBox from "../../components/PriorityBox";

const Dashboard = props => {
  const { userData } = props;
  console.log(userData);

  const printPriorities = () => {
    const prioritiesData = userData.priorityActions.map((prio, index) => (
      <div className={styles.prioBox}>
        <PriorityBox
          prioNum={index + 1}
          prioHead={prio.action}
          prioText={prio.description}
        />
      </div>
    ));
    return prioritiesData;
  };

  const capitaliseInitial = input =>
    input.replace(/^\w/, char => char.toUpperCase());

  const goToFoods = () => {
    return (
      <ul>
        <li>
          Name: {userData.userApiData["user-dashboard"]["diet-type"].name}
        </li>
        <li>
          Plant milk:{" "}
          {capitaliseInitial(
            userData.userApiData["user-dashboard"]["diet-type"]["plant-milk"]
          )}
        </li>
        <li>
          Oil:{" "}
          {capitaliseInitial(
            userData.userApiData["user-dashboard"]["diet-type"].oil
          )}
        </li>
        <li>
          Guilty pleasure:{" "}
          {capitaliseInitial(
            userData.userApiData["user-dashboard"]["diet-type"][
              "guilty-pleasure"
            ]
          )}
        </li>
        <li>
          Go-to-breakfast:{" "}
          {capitaliseInitial(
            userData.userApiData["user-dashboard"]["diet-type"][
              "go-to-breakfast"
            ]
          )}
        </li>
      </ul>
    );
  };

  const printSupplements = () => {
    const supplementsData = data["user-dashboard"].vitamins.map(
      (vits, index) => (
        <li>
          {`${capitaliseInitial(vits.name)}: ${vits["intake-action"]}.`}
          <p>{vits["intake-recommendation"]}</p>
        </li>
      )
    );
    return supplementsData;
  };

  return (
    <>
      <section className={styles.entirePage}>
        {/* <div className={styles.stickyTop}></div> */}
        <NavBar />
        <div className={styles.mainPage}>
          <section>
            <div className={styles.topCont}>
              <h2>
                Hey {userData.userApiData["user-dashboard"]["first-name"]}
              </h2>
              <div className={styles.healthScore}>
                <p>Your vegan health score: </p>
                <h2>
                  {userData.userApiData["user-dashboard"]["vegan-health-score"]}
                  %
                </h2>
                <span>
                  {
                    userData.userApiData["user-dashboard"][
                      "vegan-health-score-message"
                    ]
                  }
                </span>
              </div>
            </div>
            <section>
              <div className={styles.planOfAction}>
                <h3>Your plan of action</h3>
                <img src={blueberryTwo} alt="" />
              </div>
              <div className={styles.prioBoxes}>{printPriorities()}</div>
            </section>
            <div className={styles.dietPlan}>
              <h3>Unlock your mealtime mojo</h3>
              <div>
                <div className={`${styles.mojoBox} ${styles.dietType}`}>
                  <p>Your vegan diet type:</p>
                  <h4>
                    {userData.userApiData["user-dashboard"]["diet-type"].name}
                  </h4>
                  <img src={broccoli} alt="" />
                  <Button btnText={"View my diet plan"} />
                </div>
                <div className={styles.mojoBox}>
                  <h5>Your supplement plan (get yours now)</h5>
                  <ol>{printSupplements()}</ol>
                  <Button btnText={"Get yours now"} />
                </div>
                <div className={styles.mojoBox}>
                  <h5>Your go-to foods</h5>
                  {goToFoods()}
                  <Button btnText={"Get yours now"} />
                </div>
              </div>
            </div>
            <section>
              <div className={styles.whereToNext}>
                <h3>Where to next?</h3>
                <img src={beetrootTwo} alt="Beetroot person" />
              </div>
              <div className={styles.whereNextBox}>
                <h5>Your Nutrient Breakdown</h5>
                <div className={styles.whereToArrow}>
                  <img src={arrow} alt="Arrow right" />
                </div>
              </div>
              <div className={styles.whereNextBox}>
                <h5>Manage Your Weight</h5>
                <div className={styles.whereToArrow}>
                  <img src={arrow} alt="Arrow right" />
                </div>
              </div>
              <div className={styles.whereNextBox}>
                <h5>Boost Your Mood</h5>
                <div className={styles.whereToArrow}>
                  <img src={arrow} alt="Arrow right" />
                </div>
              </div>
              <div className={styles.whereNextBox}>
                <h5>Your Bone Analysis</h5>
                <div className={styles.whereToArrow}>
                  <img src={arrow} alt="Arrow right" />
                </div>
              </div>
            </section>
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
