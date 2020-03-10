import React, { useState } from "react";
import styles from "./QuestionnaireRadioButtons.module.scss";
import RadioButton from "../../components/RadioButton";

const QuestionnaireRadioButtons = props => {
  const [formValues, setFormValues] = useState({});
  const { question } = props;

  return (
    <section className={styles.questionnaireRadioButtons}>
      <h2>{question}</h2>
      <RadioButton
        text="Male"
        name="Gender"
        value="Male"
        startChecked={false}
        selectRadio={input => setFormValues({ ...formValues, gender: input })}
      />
      <RadioButton
        text="Female"
        name="Gender"
        value="Female"
        startChecked={false}
        selectRadio={input => setFormValues({ ...formValues, gender: input })}
      />
    </section>
  );
};

export default QuestionnaireRadioButtons;
