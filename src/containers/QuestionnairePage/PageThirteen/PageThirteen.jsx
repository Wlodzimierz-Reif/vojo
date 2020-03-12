import React, { useState } from "react";
import styles from "./PageThirteen.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/strawberry-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageThirteen = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How often do you catch whichever illness is going round?</h2>
          <RadioButton
            text="5 – never"
            name="illnessFrequency"
            value="5 – never"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, illnessFrequency: input })
            }
          />
          <RadioButton
            text="4 – hardly ever"
            name="illnessFrequency"
            value="4 – hardly ever"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, illnessFrequency: input })
            }
          />
          <RadioButton
            text="3 – I have to be careful"
            name="illnessFrequency"
            value="3 – I have to be careful"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, illnessFrequency: input })
            }
          />
          <RadioButton
            text="2 – most of the time"
            name="illnessFrequency"
            value="2 – most of the time"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, illnessFrequency: input })
            }
          />
          <RadioButton
            text="1 – every time!"
            name="illnessFrequency"
            value="1 – every time!"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, illnessFrequency: input })
            }
          />
        </section>
        <section>
          <h2>How often do you get mouth ulcers?</h2>
          <RadioButton
            text="Constantly"
            name="mouthUlcerFrequency"
            value="Constantly"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mouthUlcerFrequency: input })
            }
          />
          <RadioButton
            text="Relatively frequently"
            name="mouthUlcerFrequency"
            value="Relatively frequently"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mouthUlcerFrequency: input })
            }
          />
          <RadioButton
            text="Hardly ever"
            name="mouthUlcerFrequency"
            value="Hardly ever"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mouthUlcerFrequency: input })
            }
          />
          <RadioButton
            text="Never"
            name="mouthUlcerFrequency"
            value="Never"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, mouthUlcerFrequency: input })
            }
          />
        </section>
      </div>
      <Link to="../page-twelve">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-fourteen">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirteen;
