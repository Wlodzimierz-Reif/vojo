import React, { useState } from "react";
import styles from "./PageTwentyFive.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/walnut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentyFive = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How often do you eat...</h2>
          <h2>...flax or chia seeds?</h2>
          <RadioButton
            text="Every day"
            name="flaxChiaFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, flaxChiaFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="flaxChiaFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, flaxChiaFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="flaxChiaFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, flaxChiaFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="flaxChiaFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, flaxChiaFrequency: input })
            }
          />
        </section>
        <section>
          <h2>...nuts, nut butters or other seeds?</h2>
          <RadioButton
            text="Every day"
            name="nutsSeedsFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, nutsSeedsFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="nutsSeedsFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, nutsSeedsFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="nutsSeedsFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, nutsSeedsFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="nutsSeedsFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, nutsSeedsFrequency: input })
            }
          />
        </section>
      </div>
      <Link to="../page-twenty-four">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-twenty-six">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyFive;
