import React, { useState } from "react";
import styles from "./PageEight.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/beetroot-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageEight = props => {
  const { masterValues, changeMaster } = props;
  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How do you sleep?</h2>
          <RadioButton
            text="Like a baby"
            name="sleepRating"
            value="Like a baby"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, sleepRating: input })
            }
          />
          <RadioButton
            text="I have mostly good nights"
            name="sleepRating"
            value="I have mostly good nights"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, sleepRating: input })
            }
          />
          <RadioButton
            text="I have mostly bad nights"
            name="sleepRating"
            value="I have mostly bad nights"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, sleepRating: input })
            }
          />
          <RadioButton
            text="Terribly pretty much all the time"
            name="sleepRating"
            value="Terribly pretty much all the time"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, sleepRating: input })
            }
          />
        </section>
        <section>
          <h2>How many hours of sleep do you get per night on average?</h2>
          <InputLabel isPrimary={true} labelName={"Enter between 1 - 10"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"sleepHours"}
              selectInput={input =>
                setFormValues({ ...formValues, sleepHours: input })
              }
            />
          </div>
        </section>
      </div>
      <Link to="../page-seven">
        <img
          className={styles.leftArrow}
          src={Arrow}
          onClick={updateMasterValues}
        />
      </Link>
      <Link to="../page-nine">
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

export default PageEight;
