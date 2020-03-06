import React from "react";
import styles from "./App.module.scss";
// import MaintenancePage from "./components/MaintenancePage";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import DisplaySlider from "./components/DisplaySlider";
import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import InputLabel from "./components/InputLabel";
import InputField from "./components/InputField";
import PriorityBox from "./components/PriorityBox";
import VegPersonBox from "./components/VegPersonBox";
import VegPictureBox from "./components/VegPictureBox";
import Image from "./assets/characters/bean-1.svg";
import Image2 from "./assets/characters/bean-2.svg";

const App = () => {
  const exampleLinks = [
    "Priorities",
    "Nutrients",
    "Diet",
    "Health",
    "Genetics",
    "Answers",
    "Settings"
  ];

  const testObj = {
    priorityBoxNum: 1,
    priorityBoxHeading: "Priority Box",
    priorityBoxLink: "https://github.com/",
    priorityBoxLinkText: "Here is a link"
  };

  return (
    <>
      <div className={styles.nav}>
        <NavBar links={exampleLinks} />
      </div>
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
      <section className={styles.middleFlex}>
        <article className={styles.infoCard}>
          <h2>InfoCard Component</h2>
          <div className={styles.infoCardContainer}>
            <InfoCard />
          </div>
        </article>

        <article className={styles.input}>
          <h2>Input Box component</h2>
          <div className={styles.inputContainer}>
            <div className={styles.label}>
              <InputLabel labelName="Input Text" isPrimary={true} />
            </div>
            <InputField type="text" name="text" />
            <div className={styles.label}>
              <InputLabel labelName="Input Password" isPrimary={false} />
            </div>
            <InputField type="password" name="password" />
          </div>
        </article>
      </section>

      <section className={styles.bottomFlex}>
        <article className={styles.priority}>
          <h2>Priority Box Component</h2>
          <div className={styles.priorityContainer}>
            <PriorityBox props={testObj} />
          </div>
        </article>
        <article className={styles.vegPersonBox}>
          <h2>Veg Person Box Component</h2>
          <div className={styles.vegPersonBoxContainer}>
            <VegPersonBox
              image={Image}
              h3Text="This is the title"
              pText="This is a long paragraph, this is a long paragraph, this is a long paragraph"
            />
            <VegPersonBox
              isPrimary
              image={Image2}
              h3Text="This is the title"
              pText="This is a long paragraph, this is a long paragraph, this is a long paragraph"
            />
            <div className={styles.vegPictureBoxContainer}>
              <VegPictureBox image={Image} pText="Your text here" />
            </div>
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
