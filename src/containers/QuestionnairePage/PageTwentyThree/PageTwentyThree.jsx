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
        <section>
          <h2>
            Do you have a family history of any of these conditions? (Select a
            condition if 2 or more of your close family members [that's
            siblings, parents or grandparents] have it)
          </h2>
          <RadioButton
            text="High cholesterol"
            name="familyHistory"
            value="High cholesterol"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, familyHistory: input })
            }
          />
          <RadioButton
            text="Cardiovasuclar disease"
            name="familyHistory"
            value="Cardiovasuclar disease"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, familyHistory: input })
            }
          />
          <RadioButton
            text="High blood pressue"
            name="familyHistory"
            value="High blood pressue"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, familyHistory: input })
            }
          />
          <RadioButton
            text="Type 2 diabetes"
            name="familyHistory"
            value="Type 2 diabetes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, familyHistory: input })
            }
          />
        </section>
        <section>
          <h2>...wholegrains? (like brown rice, buckwheat, quinoa)</h2>
          <RadioButton
            text="Depression"
            name="familyHistory"
            value="Depression"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, familyHistory: input })
            }
          />
          <RadioButton
            text="Anxiety"
            name="familyHistory"
            value="Anxiety"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, familyHistory: input })
            }
          />
          <RadioButton
            text="Insomia"
            name="familyHistory"
            value="Insomia"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, familyHistory: input })
            }
          />
          <RadioButton
            text="Osteoperosis"
            name="familyHistory"
            value="Osteoperosis"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, familyHistory: input })
            }
          />
          <RadioButton
            text="Irritable Bowel Syndrome"
            name="familyHistory"
            value="Irritable Bowel Syndrome"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, familyHistory: input })
            }
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"familyHistory"}
              selectInput={input =>
                setFormValues({ ...formValues, familyHistory: input })
              }
            />
          </div>
        </section>
      </div>
      <Link to="../page-twenty-two">
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
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyThree;
