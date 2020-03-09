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
        text="Vegan"
        question="vegan"
        value="isVegan"
        startChecked={true}
        selectRadio={input => setFormValues({ ...formValues, isVegan: true })}
      />
      <RadioButton
        text="Not Vegan"
        question="vegan"
        value="isNotVegan"
        selectRadio={input => setFormValues({ ...formValues, isVegan: true })}
      />
    </section>
  );
};

export default QuestionnaireRadioButtons;
