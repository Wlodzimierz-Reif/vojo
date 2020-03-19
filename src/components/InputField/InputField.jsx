import React from "react";
import styles from "./InputField.module.scss";

const InputField = props => {
  const {type, name, placeholder, handleInput} = props;
  return (
    <input
      className={styles.inputField}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleInput}
      required
    />
  );
};

export default InputField;
