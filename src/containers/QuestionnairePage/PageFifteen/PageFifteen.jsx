import React, { useState } from "react";
import styles from "./PageFifteen.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/beetroot-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageFifteen = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>Do you want to lose weight?</h2>
          <RadioButton
            text="Yes"
            name="loseWeight"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, loseWeight: input })
            }
          />
          <RadioButton
            text="No"
            name="loseWeight"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, loseWeight: input })
            }
          />
        </section>
        <section>
          <h2>How often do you exercise? (be honest!)</h2>
          <RadioButton
            text="Everyday"
            name="loseWeight"
            value="Everyday"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, exerciseFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="exerciseFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, exerciseFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="exerciseFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, exerciseFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="exerciseFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, exerciseFrequency: input })
            }
          />
        </section>
      </div>
      <Link to="../page-fourteen">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-sixteen">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageFifteen;
