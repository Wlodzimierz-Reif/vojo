import React, { useState } from "react";
import styles from "./PageTwentyFour.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/walnut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentyFour = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How often do you eat...</h2>
          <h2>...porridge?</h2>
          <RadioButton
            text="Every day"
            name="porridgeFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, porridgeFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="porridgeFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, porridgeFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="porridgeFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, porridgeFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="porridgeFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, porridgeFrequency: input })
            }
          />
        </section>
        <section>
          <h2>
            ...fermented foods? (like sauerkraut, kimchi, sourdough bread, etc)
          </h2>
          <RadioButton
            text="Every day"
            name="fermentedFoodsFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fermentedFoodsFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="fermentedFoodsFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fermentedFoodsFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="fermentedFoodsFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fermentedFoodsFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="fermentedFoodsFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, fermentedFoodsFrequency: input })
            }
          />
        </section>
      </div>
      <Link to="../page-twenty-three">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-twenty-five">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyFour;
