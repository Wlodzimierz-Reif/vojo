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
  const [formValues, setFormValues] = useState({});

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
            selectRadio={input => setFormValues({ ...formValues, input })}
          />
          <CheckBox
            text="Pregnant"
            startChecked={false}
            value="Pregnant"
            selectRadio={input => setFormValues({ ...formValues, input })}
          />
          <CheckBox
            text="Trying to conceive"
            startChecked={false}
            value="Trying to conceive"
            selectRadio={input => setFormValues({ ...formValues, input })}
          />
          <CheckBox
            text="Planning to have children in the next few years"
            startChecked={false}
            value="Planning to have children in the next few years"
            selectRadio={input => setFormValues({ ...formValues, input })}
          />
          <CheckBox
            text="No"
            startChecked={false}
            value="No"
            selectRadio={input => setFormValues({ ...formValues, input })}
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
