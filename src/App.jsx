import React from "react";
import styles from "./App.module.scss";
// import MaintenancePage from "./components/MaintenancePage";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import DisplaySlider from "./components/DisplaySlider";

const App = () => {
  return (
    <>
      <section className={styles.topFlex}>
        <article className={styles.button}>
          <h2>Button Component</h2>
          <div className={styles.buttonContainer}>
            <Button btnText="Button" />
          </div>
        </article>

        <article className={styles.checkBox}>
          <h2>CheckBox Component</h2>
          <div className={styles.checkBoxContainer}>
            <CheckBox text="Default off" startChecked={false} />
            <CheckBox text="Default on" startChecked={true} />
          </div>
        </article>

        <article className={styles.slider}>
          <h2>Slider Component</h2>
          <div className={styles.sliderContainer}>
            <DisplaySlider sliderColor="greenToRed" />
          </div>
          <div className={styles.sliderContainer}>
            <DisplaySlider sliderColor="redGreenYellow" />
          </div>
          <div className={styles.sliderContainer}>
            <DisplaySlider sliderColor="redToGreen" />
          </div>
        </article>
      </section>
    </>
    // <div className={styles.maintenanceContainer}>
    //   <MaintenancePage />
    // </div>
  );
};

export default App;
