import React from "react";
import styles from "./InputField.module.scss";

const InputField = props => {
  return (
    <input
      className={styles.inputField}
      type={props.type}
      name={props.name}
      required
    />
  );
};

export default InputField;
