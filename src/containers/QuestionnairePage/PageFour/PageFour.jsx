import React, { useState } from "react";
import styles from "./PageFour.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/bean-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageFour = () => {
  const [formValues, setFormValues] = useState({ pregnantBreastFeeding: [] });
  const { pregnantBreastFeeding } = formValues;

  const handleCheckToggle = inputVal => {
    const isPresent = pregnantBreastFeeding.includes(inputVal);

    if (isPresent === true) {
      const newArray = [...pregnantBreastFeeding];
      const valPosition = pregnantBreastFeeding.indexOf(inputVal);
      newArray.splice(valPosition, 1);
      setFormValues({
        ...formValues,
        pregnantBreastFeeding: newArray
      });
    } else {
      setFormValues({
        ...formValues,
        pregnantBreastFeeding: [...pregnantBreastFeeding, inputVal]
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>
            Are you currently breastfeeding, pregnant or trying to conceive?
          </h2>
          <CheckBox
            text="Breastfeeding"
            startChecked={false}
            value="Breastfeeding"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Pregnant"
            startChecked={false}
            value="Pregnant"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Trying to conceive"
            startChecked={false}
            value="Trying to conceive"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="Planning to have children in the next few years"
            startChecked={false}
            value="Planning to have children in the next few years"
            selectCheckBox={input => handleCheckToggle(input)}
          />
          <CheckBox
            text="No"
            startChecked={false}
            value="No"
            selectCheckBox={input => handleCheckToggle(input)}
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
      <Link to="../page-three">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-five">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageFour;
