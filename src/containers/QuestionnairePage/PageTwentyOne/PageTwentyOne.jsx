import React, { useState } from "react";
import styles from "./PageTwentyOne.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/pickle-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentyOne = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How often do you eat...</h2>
          <h2>
            ...readymade vegan meat substitutes? (like burgers, sausages, cold
            meat slices, etc)
          </h2>
          <RadioButton
            text="Every day"
            name="veganMeatFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganMeatFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="veganMeatFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganMeatFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="veganMeatFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganMeatFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="veganMeatFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganMeatFrequency: input })
            }
          />
        </section>
        <section>
          <h2>...readymade vegan cheese?</h2>
          <RadioButton
            text="Every day"
            name="veganCheeseFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganCheeseFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="veganCheeseFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganCheeseFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="veganCheeseFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganCheeseFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="veganCheeseFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganCheeseFrequency: input })
            }
          />
        </section>
      </div>
      <Link to="../page-twenty">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-twenty-two">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyOne;
