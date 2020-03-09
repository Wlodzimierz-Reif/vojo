import React from "react";
import styles from "./QuestionnaireInputField.module.scss";
import InputField from "../../components/InputField";
import InputLabel from "../../components/InputLabel";

const QuestionnaireInputField = props => {
  const { question } = props;
  return (
    <section className={styles.questionnaireInputField}>
      <h2>{question}</h2>
      <InputLabel labelName={"test"} />
      <InputField name={"world"} />
    </section>
  );
};

export default QuestionnaireInputField;
