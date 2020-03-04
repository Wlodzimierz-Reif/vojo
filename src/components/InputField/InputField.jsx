import React from "react";
import styles from "./InputField.module.scss";

const InputField = () => {
  return (
    <>
      <label className={styles.inputLabel}>Name</label>
      <input className={styles.inputField} type="text" name="name" required />
    </>
  );
};

export default InputField;
