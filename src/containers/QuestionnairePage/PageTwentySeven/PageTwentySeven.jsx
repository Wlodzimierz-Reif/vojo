import React, { useState } from "react";
import styles from "./PageTwentySeven.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/walnut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentySeven = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>Do you take any of these supplements?</h2>
          <RadioButton
            text="B12"
            name="allSupplements"
            value="B12"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allSupplements: input })
            }
          />
          <RadioButton
            text="Omega-3"
            name="allSupplements"
            value="Omega-3"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allSupplements: input })
            }
          />
          <RadioButton
            text="Vitamin D"
            name="allSupplements"
            value="Vitamin D"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allSupplements: input })
            }
          />
          <RadioButton
            text="Calcium"
            name="allSupplements"
            value="Calcium"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allSupplements: input })
            }
          />
          <RadioButton
            text="Zinc"
            name="allSupplements"
            value="Zinc"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Magnesium"
            name="allSupllements"
            value="Magnesium"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allSupllements: input })
            }
          />
          <RadioButton
            text="Iron"
            name="allSupllements"
            value="Iron"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, allSupllements: input })
            }
          />
          <RadioButton
            text="A multivitamin"
            name="allSupllements"
            value="A multivitamin"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"allSupllements"}
              selectInput={input =>
                setFormValues({ ...formValues, allSupllements: input })
              }
            />
          </div>
        </section>
      </div>
      <Link to="../page-twenty-six">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-twenty-eight">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentySeven;
