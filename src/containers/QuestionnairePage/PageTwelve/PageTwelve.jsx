import React, { useState } from "react";
import styles from "./PageTwelve.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/strawberry-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageTwelve = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>Which of the following sounds like your skin?</h2>
          <RadioButton
            text="Normal"
            name="skinIssues"
            value="Normal"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinIssues: input })
            }
          />
          <RadioButton
            text="Dry"
            name="skinIssues"
            value="Dry"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinIssues: input })
            }
          />
          <RadioButton
            text="Spotty"
            name="skinIssues"
            value="Spotty"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinIssues: input })
            }
          />
          <RadioButton
            text="Itchy"
            name="skinIssues"
            value="Itchy"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinIssues: input })
            }
          />
          <RadioButton
            text="Eczema"
            name="skinIssues"
            value="Eczema"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinIssues: input })
            }
          />
          <RadioButton
            text="Dermatitis"
            name="skinIssues"
            value="Dermatitis"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, skinIssues: input })
            }
          />
        </section>
        <section>
          <h2>Do you tend to have sore and cracked lips?</h2>
          <RadioButton
            text="Yes, a lot"
            name="lipIssues"
            value="Yes, a lot"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, lipIssues: input })
            }
          />
          <RadioButton
            text="Yeah, sometimes"
            name="lipIssues"
            value="Yeah, sometimes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, lipIssues: input })
            }
          />
          <RadioButton
            text="Not very often"
            name="lipIssues"
            value="Not very often"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, lipIssues: input })
            }
          />
          <RadioButton
            text="Never"
            name="lipIssues"
            value="Never"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, lipIssues: input })
            }
          />
        </section>
      </div>
      <Link to="../page-eleven">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-thirteen">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageTwelve;
