import React from "react";
import styles from "./InputField.module.scss";

const InputField = props => {
  const { name, type, selectInput } = props;
  return (
    <input
      className={styles.inputField}
      type={type}
      name={name}
      onInput={event => selectInput(event.target.value)}
      required
    />
  );
};

export default InputField;
