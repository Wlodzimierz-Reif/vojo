import React, { useState } from "react";
import styles from "./PageThirtyOne.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/walnut-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageThirtyOne = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>Have you been diagnosed with an autoimmune condition?</h2>
          <RadioButton
            text="Lupus"
            name="autoimmuneCondition"
            value="Lupus"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, autoimmuneCondition: input })
            }
          />
          <RadioButton
            text="MS"
            name="autoimmuneCondition"
            value="MS"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, autoimmuneCondition: input })
            }
          />
          <RadioButton
            text="Type 1 diabetes"
            name="autoimmuneCondition"
            value="Type 1 diabetes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, autoimmuneCondition: input })
            }
          />
          <RadioButton
            text="Graves"
            name="autoimmuneCondition"
            value="Graves"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, autoimmuneCondition: input })
            }
          />
          <RadioButton
            text="Hashimoto's"
            name="autoimmuneCondition"
            value="Hashimoto's"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, autoimmuneCondition: input })
            }
          />
          <RadioButton
            text="IBD (Crohn's/Colitis)"
            name="autoimmuneCondition"
            value="IBD (Crohn's/Colitis)"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, autoimmuneCondition: input })
            }
          />
          <RadioButton
            text="Coeliac Disease"
            name="autoimmuneCondition"
            value="Coeliac Disease"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, autoimmuneCondition: input })
            }
          />
          <RadioButton
            text="Rhuematoid arthritis"
            name="autoimmuneCondition"
            value="Rhuematoid arthritis"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, autoimmuneCondition: input })
            }
          />
          <InputLabel isPrimary={true} labelName={"Other"} />
          <div className={styles.inputFieldContainer}>
            <InputField
              name={"autoimmuneCondition"}
              selectInput={input =>
                setFormValues({ ...formValues, autoimmuneCondition: input })
              }
            />
          </div>
        </section>
      </div>
      <Link to="../page-thirty">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-thirty-two">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirtyOne;
