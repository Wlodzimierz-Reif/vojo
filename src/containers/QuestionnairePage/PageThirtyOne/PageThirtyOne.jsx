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
          <h2>Which type of oil do you use most often?</h2>
          <RadioButton
            text="Sunflower/vegetable"
            name="oil"
            value="Sunflower/vegetable"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Rapeseed"
            name="oil"
            value="Rapeseed"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Flaxseed"
            name="oil"
            value="Flaxseed"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Hemp"
            name="oil"
            value="Hemp"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Cocunut"
            name="oil"
            value="Cocunut"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="Olive"
            name="oil"
            value="Olive"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="I'm on a low-fat diet"
            name="oil"
            value="I'm on a low-fat diet"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
          <RadioButton
            text="I'm on a wholefood diet"
            name="oil"
            value="I'm on a wholefood diet"
            startChecked={false}
            selectRadio={input => setFormValues({ ...formValues, oil: input })}
          />
        </section>
      </div>
      <Link to="../page-twenty-nine">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-thirty-one">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageThirtyOne;
