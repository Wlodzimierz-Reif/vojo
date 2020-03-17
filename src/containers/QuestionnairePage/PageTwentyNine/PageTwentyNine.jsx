import React, { useState } from "react";
import styles from "./PageTwentyNine.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/walnut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentyNine = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How often do you supplement algal algal (omega-3)?</h2>
          <RadioButton
            text="Every day"
            name="algalOilSupplementFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
          <RadioButton
            text="A few times a week"
            name="algalOilSupplementFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
          <RadioButton
            text="A few times a month"
            name="algalOilSupplementFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="algalOilSupplementFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
          <h2>Are you currently taking any prescription medications?</h2>
          <RadioButton
            text="Yes"
            name="algalOilSupplementFrequency"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
          <RadioButton
            text="No"
            name="algalOilSupplementFrequency"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({
                ...formValues,
                algalOilSupplementFrequency: input
              })
            }
          />
        </section>
      </div>
      <Link to="../page-twenty-eight">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-thirty">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyNine;
