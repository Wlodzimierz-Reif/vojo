import React, { useState } from "react";
import styles from "./PageTwentyThree.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/walnut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentyThree = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How often do you eat...</h2>
          <h2>
            ...beans, pulses and bean products? (like tofu, tempeh, baked beans,
            hummus)
          </h2>
          <RadioButton
            text="Every day"
            name="beansPulsesFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, beansPulsesFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="beansPulsesFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, beansPulsesFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="beansPulsesFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, beansPulsesFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="beansPulsesFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, beansPulsesFrequency: input })
            }
          />
        </section>
        <section>
          <h2>...wholegrains? (like brown rice, buckwheat, quinoa)</h2>
          <RadioButton
            text="Every day"
            name="wholeGrainsFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainsFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="wholeGrainsFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainsFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="wholeGrainsFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainsFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="wholeGrainsFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainsFrequency: input })
            }
          />
        </section>
      </div>
      <Link to="../page-twenty-two">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-twenty-four">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyThree;
