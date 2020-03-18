import React, { useState } from "react";
import styles from "./PageTwentyEight.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/banana-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwentyEight = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>
            How often do you supplement B12 (or a multivitamin providing B12)?
          </h2>
          <RadioButton
            text="Every day"
            name="b12SupplementFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, b12SupplementFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="b12SupplementFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, b12SupplementFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="b12SupplementFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, b12SupplementFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="b12SupplementFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, b12SupplementFrequency: input })
            }
          />
          <h2>
            How often do you supplement vitamin D during the winter (or a
            multivitamin providing vitamin D)? ?
          </h2>
          <RadioButton
            text="Every day"
            name="vitdSupplementFrequency"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, vitdSupplementFrequency: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="vitdSupplementFrequency"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, vitdSupplementFrequency: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="vitdSupplementFrequency"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, vitdSupplementFrequency: input })
            }
          />
          <RadioButton
            text="Never or rarely"
            name="vitdSupplementFrequency"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, vitdSupplementFrequency: input })
            }
          />
        </section>
      </div>
      <Link to="../page-twenty-seven">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-twenty-nine">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwentyEight;
