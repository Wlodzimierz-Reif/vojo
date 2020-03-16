import React, { useState } from "react";
import styles from "./PageTwentyTwo.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/walnut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentyTwo = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How often do you eat...</h2>
          <h2>...readymade vegan spread or butter alternative?</h2>
          <RadioButton
            text="Every day"
            name="veganSpreadFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganSpreadFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="veganSpreadFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganSpreadFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="veganSpreadFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganSpreadFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="veganSpreadFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, veganSpreadFrequency: input })
            }
          />
        </section>
        <section>
          <h2>...readymade plant milks?</h2>
          <RadioButton
            text="Every day"
            name="plantMilkFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, plantMilkFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="plantMilkFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, plantMilkFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="plantMilkFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, plantMilkFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="plantMilkFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, plantMilkFrequency: input })
            }
          />
        </section>
      </div>
      <Link to="../page-twenty-one">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-twenty-three">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyTwo;
