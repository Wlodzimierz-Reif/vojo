import React, { useState } from "react";
import styles from "./PageSixteen.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/apple-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageSixteen = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>When did you last break a bone or tooth?</h2>
          <RadioButton
            text="In the last year"
            name="bonesTeethBroken"
            value="In the last year"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, bonesTeethBroken: input })
            }
          />
          <RadioButton
            text="A few years ago"
            name="bonesTeethBroken"
            value="A few years ago"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, bonesTeethBroken: input })
            }
          />
          <RadioButton
            text="More than ten years"
            name="bonesTeethBroken"
            value="More than ten years"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, bonesTeethBroken: input })
            }
          />
          <RadioButton
            text="Never"
            name="bonesTeethBroken"
            value="Never"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, bonesTeethBroken: input })
            }
          />
        </section>
        <section>
          <h2>Do you experience joint pain?</h2>
          <RadioButton
            text="Never or rarely"
            name="jointPain"
            value="Never or rarely"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, jointPain: input })
            }
          />
          <RadioButton
            text="A few times a month"
            name="jointPain"
            value="A few times a month"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, jointPain: input })
            }
          />
          <RadioButton
            text="A few times a week"
            name="jointPain"
            value="A few times a week"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, jointPain: input })
            }
          />
          <RadioButton
            text="Every day"
            name="jointPain"
            value="Every day"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, jointPain: input })
            }
          />
        </section>
      </div>
      <Link to="../page-fifteen">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-seventeen">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageSixteen;
