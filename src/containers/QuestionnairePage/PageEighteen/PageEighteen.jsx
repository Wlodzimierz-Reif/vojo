import React, { useState } from "react";
import styles from "./PageEighteen.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/banana-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageEighteen = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How do you eat your veggies?</h2>
          <RadioButton
            text="Mostly cooked"
            name="howVeggies"
            value="Mostly cooked"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
          <RadioButton
            text="Equal amounts raw and cooked"
            name="howVeggies"
            value="Equal amounts raw and cooked"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
          <RadioButton
            text="Mostly raw"
            name="howVeggies"
            value="Mostly raw"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
          <RadioButton
            text="Only raw"
            name="howVeggies"
            value="Only raw"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
          <RadioButton
            text="What's a vegetable?"
            name="howVeggies"
            value="What's a vegetable?"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, howVeggies: input })
            }
          />
        </section>
        <section>
          <h2>How often do you soak your wholegrains, beans or pulses?</h2>
          <RadioButton
            text="Always"
            name="soaking"
            value="Always"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="Sometimes"
            name="soaking"
            value="Sometimes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="Hardly ever"
            name="soaking"
            value="Hardly ever"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="Never"
            name="soaking"
            value="Never"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="I don't eat them"
            name="soaking"
            value="I don't eat them"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
        </section>
      </div>
      <Link to="../page-seventeen">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-nineteen">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageEighteen;
