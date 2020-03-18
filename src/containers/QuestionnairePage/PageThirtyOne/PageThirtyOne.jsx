import React, { useState } from "react";
import styles from "./PageThirtyOne.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/pickle-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link, navigate } from "@reach/router";

const PageThirtyOne = () => {
  const [formValues, setFormValues] = useState({ familyHistory: [] });
  const { familyHistory } = formValues;
  const [other, setOther] = useState(null);

  const handleCheckToggle = inputVal => {
    const isPresent = familyHistory.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...familyHistory];
      const valPosition = familyHistory.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        familyHistory: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        familyHistory: [...familyHistory, inputVal]
      });
    }
  };

  const navigateToNext = () => {
    if (!other === null || !other == "") {
      setFormValues({
        ...formValues,
        familyHistory: [...familyHistory, other]
      });
      navigate("/questionnaire-page/page-thirty-two");
    }
  };
  const handleInputValue = inputVal => {
    setOther(inputVal);
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>...readymade vegan spread or butter alternative?</h2>
          <CheckBox
            text="Everyday"
            startChecked={false}
            value="Everyday"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="A few times a week"
            startChecked={false}
            value="A few times a week"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="A few times a month"
            startChecked={false}
            value="A few times a month"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Never or rarely'"
            startChecked={false}
            value="Never or rarely'"
            selectCheckBox={input => handleCheckToggle(input)}
          />
        </section>
      </div>
      <Link to="../page-thirty">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <img className={styles.rightArrow} src={Arrow} onClick={navigateToNext} />
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirtyOne;
