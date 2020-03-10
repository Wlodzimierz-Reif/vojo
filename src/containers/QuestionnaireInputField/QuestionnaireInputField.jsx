import React, { useState } from "react";
import styles from "./QuestionnaireInputField.module.scss";
import InputField from "../../components/InputField";
import InputLabel from "../../components/InputLabel";

const QuestionnaireInputField = props => {
  const [formValues, setFormValues] = useState({});
  const { question } = props;

  return (
    <section className={styles.questionnaireInputField}>
      <h2>{question}</h2>
      <InputLabel labelName={"Enter your height in metres"} />
      <InputField
        name={"world"}
        selectInput={input => setFormValues({ ...formValues, height: input })}
      />
    </section>
  );
};

export default QuestionnaireInputField;
