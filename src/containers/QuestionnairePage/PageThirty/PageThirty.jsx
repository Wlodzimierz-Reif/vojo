import React, { useState } from "react";
import styles from "./PageThirty.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/walnut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageThirty = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>Are you currently taking any of the following medications?</h2>
          <RadioButton
            text="Proton-pump imhibitors"
            name="whichPrescriptionMeds"
            value="Proton-pump imhibitors"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichPrescriptionMeds: input })
            }
          />
          <RadioButton
            text="Statins"
            name="whichPrescriptionMeds"
            value="Statins"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichPrescriptionMeds: input })
            }
          />
          <RadioButton
            text="Metformin"
            name="whichPrescriptionMeds"
            value="Metformin"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichPrescriptionMeds: input })
            }
          />
          <RadioButton
            text="Antidepressants"
            name="whichPrescriptionMeds"
            value="Antidepressants"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichPrescriptionMeds: input })
            }
          />
          <RadioButton
            text="Anxiolytics"
            name="whichPrescriptionMeds"
            value="Anxiolytics"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichPrescriptionMeds: input })
            }
          />
          <RadioButton
            text="Sleep medications"
            name="whichPrescriptionMeds"
            value="Sleep medications"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichPrescriptionMeds: input })
            }
          />
          <RadioButton
            text="Anticoagulants"
            name="whichPrescriptionMeds"
            value="Anticoagulants"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichPrescriptionMeds: input })
            }
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"whichPrescriptionMeds"}
              selectInput={input =>
                setFormValues({ ...formValues, whichPrescriptionMeds: input })
              }
            />
          </div>
        </section>
      </div>

      <Link to="../page-twenty-nine">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-thirty-one">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirty;
