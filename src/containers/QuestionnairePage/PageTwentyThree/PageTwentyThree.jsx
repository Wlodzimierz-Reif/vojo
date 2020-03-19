import React, { useState } from "react";
import styles from "./PageTwentyThree.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/bean-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentyThree = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../../page-twenty-two">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
            />
          </Link>
          <Link to="../page-twenty-four">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
            />
          </Link>
        </div>
        <section>
          <h2>How often do you eat...</h2>
          <h2>
            ...beans, pulses and bean products? (like tofu, tempeh, baked beans,
            hummus)
          </h2>
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
            text="Few times a week"
            name="plantMilkFrequency"
            value="Few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, plantMilkFrequency: input })
            }
          />
          <RadioButton
            text="Few times a month"
            name="plantMilkFrequency"
            value="Few times a month"
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
        <section>
          <h2>...wholegrains? (like brown rice, buckwheat, quinoa)</h2>
          <RadioButton
            text="Every day"
            name="wholeGrainFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainFrequency: input })
            }
          />
          <RadioButton
            text="Few times a week"
            name="wholeGrainFrequency"
            value="Few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainFrequency: input })
            }
          />
          <RadioButton
            text="Few times a month"
            name="wholeGrainFrequency"
            value="Few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="wholeGrainFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, wholeGrainFrequency: input })
            }
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyThree;
