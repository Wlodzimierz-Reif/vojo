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
        <section>
          <h2>What is your name?</h2>
          <InputLabel isPrimary={true} labelName={"First name"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"firstName"}
              selectInput={input =>
                setFormValues({ ...formValues, firstName: input })
              }
            />
          </div>
          <InputLabel isPrimary={true} labelName={"Last name"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"secondName"}
              selectInput={input =>
                setFormValues({ ...formValues, secondName: input })
              }
            />
          </div>
        </section>
        <section>
          <h2>What is your biological gender?</h2>
          <RadioButton
            text="Male"
            name="Gender"
            value="Male"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, gender: input })
            }
          />
          <RadioButton
            text="Female"
            name="Gender"
            value="Female"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, gender: input })
            }
          />
        </section>
        <section>
          <h2>What is your current diet?</h2>
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
        </section>
      </div>
      <img className={styles.leftArrow} src={Arrow} />
      <img className={styles.rightArrow} src={Arrow} />

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageOne;
