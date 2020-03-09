import React from "react";
import styles from "./InputField.module.scss";

const InputField = props => {
  const { name, type } = props;
  return (
    <input className={styles.inputField} type={type} name={name} required />
  );
};

export default InputField;
