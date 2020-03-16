import React, { useState } from "react";
import styles from "./PageFourteen.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/pickle-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageFourteen = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>Do you have any allergies?</h2>
          <RadioButton
            text="Yes"
            name="allergies"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allergie: input })
            }
          />
          <RadioButton
            text="No"
            name="allergies"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allergie: input })
            }
          />
        </section>
        <section>
          <h2>Which allergies do you have?</h2>
          <RadioButton
            text="Hay fever, asthma or eczema"
            name="whichAllergies"
            value="Hay fever, asthma or eczema"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichAllergies: input })
            }
          />
          <RadioButton
            text="Animals"
            name="whichAllergies"
            value="Animals"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichAllergies: input })
            }
          />
          <RadioButton
            text="Peanuts"
            name="whichAllergies"
            value="Peanuts"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichAllergies: input })
            }
          />
          <RadioButton
            text="Tree nuts"
            name="whichAllergies"
            value="Tree nuts"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichAllergies: input })
            }
          />
          <RadioButton
            text="Soy"
            name="whichAllergies"
            value="Soy"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichAllergies: input })
            }
          />
          <RadioButton
            text="Wheat"
            name="whichAllergies"
            value="Wheat"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, whichAllergies: input })
            }
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"whichAllergies"}
              selectInput={input =>
                setFormValues({ ...formValues, whichAllergies: input })
              }
            />
          </div>
        </section>
      </div>
      <Link to="../page-thirteen">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-fifteen">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageFourteen;
