import React, { useState } from "react";
import styles from "./PageOne.module.scss";
import InputLabel from "../../../../components/InputLabel";
import InputField from "../../../../components/InputField";
import RadioButton from "../../../../components/RadioButton";
import CheckBox from "../../../../components/CheckBox";
import Image from "../../../../assets/characters/bean-2.svg";
import Arrow from "../../../../assets/graphic-devices/primary-color-arrow-1.svg";

const PageOne = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <h2>Details</h2>
        <InputLabel isPrimary={true} labelName={"What's your 1st name"} />
        <div className={styles.inputFieldContainer}>
          <InputField
            name={"firstName"}
            selectInput={input =>
              setFormValues({ ...formValues, firstName: input })
            }
          />
        </div>
        <InputLabel isPrimary={true} labelName={"What's your 2nd name"} />
        <div className={styles.inputFieldContainer}>
          <InputField
            name={"secondName"}
            selectInput={input =>
              setFormValues({ ...formValues, secondName: input })
            }
          />
        </div>
        <RadioButton
          text="Male"
          name="Gender"
          value="Male"
          startChecked={false}
          selectRadio={input => setFormValues({ ...formValues, gender: input })}
        />
        <RadioButton
          text="Female"
          name="Gender"
          value="Female"
          startChecked={false}
          selectRadio={input => setFormValues({ ...formValues, gender: input })}
        />
        <h2>Diet?</h2>
        <CheckBox
          text="Vegan"
          startChecked={true}
          handleClick={() =>
            setFormValues({ ...formValues, diet: [...formValues, "Vegan"] })
          }
        />
        <CheckBox
          text="Veggie"
          startChecked={false}
          handleClick={() =>
            setFormValues({ ...formValues, diet: [...formValues, "Veggie"] })
          }
        />
        <CheckBox
          text="Other"
          startChecked={false}
          handleClick={() =>
            setFormValues({ ...formValues, diet: [...formValues, "Other"] })
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
      </div>
      <img className={styles.leftArrow} src={Arrow} />
      <img className={styles.rightArrow} src={Arrow} />

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageOne;
