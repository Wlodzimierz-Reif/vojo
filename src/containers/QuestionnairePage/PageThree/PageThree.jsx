import React, { useState } from "react";
import styles from "./PageThree.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/butternut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageThree = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How tall are you?</h2>
          <InputLabel isPrimary={true} labelName={"Enter height in metres"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"height"}
              selectInput={input =>
                setFormValues({ ...formValues, height: input })
              }
            />
          </div>
        </section>
        <section>
          <h2>How much do you weight?</h2>
          <InputLabel isPrimary={true} labelName={"Enter weight in kg's"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"weight"}
              selectInput={input =>
                setFormValues({ ...formValues, weight: input })
              }
            />
          </div>
        </section>
      </div>
      <Link to="../page-two">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-four">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThree;
