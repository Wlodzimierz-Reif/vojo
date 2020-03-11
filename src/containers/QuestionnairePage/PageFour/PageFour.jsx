import React, { useState } from "react";
import styles from "./PageFour.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/bean-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";

const PageFour = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>Are you currently breastfeeding, pregnant or trying to conceive?</h2>
         <CheckBox
            text="Breastfeeding"
            startChecked={false}
            handleClick={() =>
              setFormValues({
                ...formValues,
                diet: [...formValues.diet, "breastFeeding"]
              })
            }
          />
          <CheckBox
            text="Cannibal"
            startChecked={false}
            handleClick={() =>
              setFormValues({
                ...formValues,
                diet: [...formValues.diet, "Cannibal"]
              })
            }
          />
          <CheckBox
            text="Cannibal"
            startChecked={false}
            handleClick={() =>
              setFormValues({
                ...formValues,
                diet: [...formValues.diet, "Cannibal"]
              })
            }
          />
          <CheckBox
            text="Cannibal"
            startChecked={false}
            handleClick={() =>
              setFormValues({
                ...formValues,
                diet: [...formValues.diet, "Cannibal"]
              })
            }
          />
          <CheckBox
            text="Cannibal"
            startChecked={false}
            handleClick={() =>
              setFormValues({
                ...formValues,
                diet: [...formValues.diet, "Cannibal"]
              })
            }
          />
        </section>
        <section>
          <h2>How long have you been veg/vegetarian/pesc/meat?</h2>
          <RadioButton
            text="Less than a year"
            name="currentDietTime"
            value="Less than a year"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, currentDietTime: input })
            }
          />
           <RadioButton
            text="1 - 3 years"
            name="currentDietTime"
            value="1 - 3 years"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, currentDietTime: input })
            }
          />
           <RadioButton
            text="4 - 10 years"
            name="currentDietTime"
            value="4 - 10 years"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, currentDietTime: input })
            }
          />
           <RadioButton
            text="More than 10 years"
            name="currentDietTime"
            value="More than 10 years"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, currentDietTime: input })
            }
          />
        </section>        
      </div>
      <img className={styles.leftArrow} src={Arrow} />
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
      <img className={styles.rightArrow} src={Arrow} />
    </div>
  );
};

export default PageFour;
