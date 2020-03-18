import React, { useState } from "react";
import styles from "./PageTwentyTwo.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/strawberry-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentyTwo = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>Have you ever been diagnosed with any of these conditions?</h2>
          <RadioButton
            text="High cholestoral"
            name="diagnosedCondition"
            value="High cholestoral"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, diagnosedCondition: input })
            }
          />
          <RadioButton
            text="Cardiovascular disease"
            name="diagnosedCondition"
            value="Cardiovascular disease"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, diagnosedCondition: input })
            }
          />
          <RadioButton
            text="High blood pressue"
            name="diagnosedCondition"
            value="High blood pressue"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, diagnosedCondition: input })
            }
          />
          <RadioButton
            text="Type 2 diabetes"
            name="diagnosedCondition"
            value="Type 2 diabetes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, diagnosedCondition: input })
            }
          />
          <RadioButton
            text="Depression"
            name="diagnosedCondition"
            value="Depression"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, diagnosedCondition: input })
            }
          />
          <RadioButton
            text="Anxiety"
            name="diagnosedCondition"
            value="Anxiety"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, diagnosedCondition: input })
            }
          />
          <RadioButton
            text="Insomnia"
            name="diagnosedCondition"
            value="Insomnia"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, diagnosedCondition: input })
            }
          />
          <RadioButton
            text="Osteoperosis"
            name="diagnosedCondition"
            value="Osteoperosis"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, diagnosedCondition: input })
            }
          />
          <RadioButton
            text="Irritable Bowel Syndrome (IBS)"
            name="diagnosedCondition"
            value="Irritable Bowel Syndrome (IBS)"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, diagnosedCondition: input })
            }
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"diagnosedCondition"}
              selectInput={input =>
                setFormValues({ ...formValues, diagnosedCondition: input })
              }
            />
          </div>
        </section>
      </div>

      <Link to="../page-twenty-one">
        <img
          className={styles.leftArrow}
          src={Arrow}
          onClick={updateMasterValues}
        />
      </Link>
      <Link to="../page-twenty-three">
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

export default PageTwentyTwo;
