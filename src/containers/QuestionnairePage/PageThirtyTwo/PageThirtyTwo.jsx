import React, { useState } from "react";
import styles from "./PageThirtyTwo.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/beetroot-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link, navigate } from "@reach/router";

const PageThirtyTwo = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({ diagnosedCondition: [] });
  const { diagnosedCondition } = formValues;
  const [other, setOther] = useState(null);

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  const handleCheckToggle = inputVal => {
    const isPresent = diagnosedCondition.includes(inputVal);
    if (isPresent === true) {
      const newArray = [...diagnosedCondition];
      const valPosition = diagnosedCondition.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        diagnosedCondition: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        diagnosedCondition: [...diagnosedCondition, inputVal]
      });
    }
  };

  const navigateToNext = () => {
    setFormValues({
      ...formValues,
      diagnosedCondition: [...diagnosedCondition, other]
    });
    navigate("/questionnaire-page/page-thirty-three");
  };

  const handleInputValue = inputVal => {
    setOther(inputVal);
  };

  const updateMasterNavigateWrapperFunction = () => {
    updateMasterValues();
    navigateToNext();
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>Have you ever been diagnosed with any of these conditions?</h2>
          <CheckBox
            text="High cholesterol"
            startChecked={false}
            value="High cholesterol"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Cardiovascular disease"
            startChecked={false}
            value="Cardiovascular disease"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="High blood pressure"
            startChecked={false}
            value="High blood pressure"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Type 2 diabetes"
            startChecked={false}
            value="Type 2 diabetes"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Depression"
            startChecked={false}
            value="Depression"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Anxiety"
            startChecked={false}
            value="Anxiety"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Insomnia"
            startChecked={false}
            value="Insomnia"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Osteoporosis"
            startChecked={false}
            value="Osteoporosis"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Irritable Bowel Syndrome (IBS)"
            startChecked={false}
            value="Irritable Bowel Syndrome (IBS)"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"diagnosedCondition"}
              selectInput={input => handleInputValue(input)}
            />
          </div>
        </section>
      </div>
      <Link to="../page-thirty-one">
        <img
          className={styles.leftArrow}
          src={Arrow}
          onClick={updateMasterNavigateWrapperFunction}
        />
      </Link>
      <img
        className={styles.rightArrow}
        src={Arrow}
        onClick={updateMasterNavigateWrapperFunction}
      />
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirtyTwo;
