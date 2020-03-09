import React, { useState } from "react";
import styles from "./QuestionnaireCheckBoxes.module.scss";
import CheckBox from "../../components/CheckBox";

const QuestionnaireCheckBoxes = props => {
  const [formValues, setFormValues] = useState({});
  const { question } = props;

  return (
    <section className={styles.questionnaireCheckBoxes}>
      <h2>{question}</h2>
      <CheckBox text="hello" startChecked={true} />
      <CheckBox text="again" startChecked={false} />
    </section>
  );
};

export default QuestionnaireCheckBoxes;
