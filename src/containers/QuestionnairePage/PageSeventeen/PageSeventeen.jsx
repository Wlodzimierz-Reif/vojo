import React, { useState } from "react";
import styles from "./PageSeventeen.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/broccoli-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageSeventeen = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How regular is your menstrual cycle?</h2>
          <RadioButton
            text="Like clockwork"
            name="menstrualCycle"
            value="Like clockwork"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, menstrualCycle: input })
            }
          />
          <RadioButton
            text="Irregular"
            name="menstrualCycle"
            value="Irregular"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, menstrualCycle: input })
            }
          />
          <RadioButton
            text="I'm pre/peri/postmenopausal"
            name="menstrualCycle"
            value="I'm pre/peri/postmenopausal"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, menstrualCycle: input })
            }
          />
          <RadioButton
            text="I have amenorrhea (no periods)"
            name="menstrualCycle"
            value="I have amenorrhea (no periods)"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, menstrualCycle: input })
            }
          />
        </section>
      </div>
      <Link to="../page-sixteen">
        <img
          className={styles.leftArrow}
          src={Arrow}
          onClick={updateMasterValues}
        />
      </Link>
      <Link to="../page-eighteen">
        <img
          className={styles.rightArrow}
          src={Arrow}
          onClick={updateMasterValues}
        />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageSeventeen;
