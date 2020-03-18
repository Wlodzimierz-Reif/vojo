import React, { useState } from "react";
import styles from "./PageSix.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/carrot-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageSix = props => {
  const { masterValues, changeMaster } = props;
  const [formValues, setFormValues] = useState({});
  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>What is your skin tone?</h2>
          <RadioButton
            text="Light, pale white"
            name="skinTone"
            value="Light, pale white"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinTone: input })
            }
          />
          <RadioButton
            text="White, fair"
            name="skinTone"
            value="White, fair"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinTone: input })
            }
          />
          <RadioButton
            text="Medium, white to light brown"
            name="skinTone"
            value="Medium, white to light brown"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinTone: input })
            }
          />
          <RadioButton
            text="Olive, moderate brown"
            name="skinTone"
            value="Olive, moderate brown"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinTone: input })
            }
          />
          <RadioButton
            text="Brown, dark brown"
            name="skinTone"
            value="Brown, dark brown"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinTone: input })
            }
          />
          <RadioButton
            text="Very dark brown to black"
            name="skinTone"
            value="Very dark brown to black"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinTone: input })
            }
          />
        </section>
        <section>
          <h2>Do you smoke?</h2>
          <RadioButton
            text="Yes"
            name="smoker"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, smoker: input })
            }
          />
          <RadioButton
            text="No"
            name="smoker"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, smoker: input })
            }
          />
        </section>
      </div>
      <Link to="../page-five">
        <img
          className={styles.leftArrow}
          src={Arrow}
          onClick={updateMasterValues}
        />
      </Link>
      <Link to="../page-seven">
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

export default PageSix;
