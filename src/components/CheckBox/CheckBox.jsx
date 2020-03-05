import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = props => {
  const { text } = props;
  return (
    <label className={styles.container}>
      <input type="checkbox" name="checkAddress" />
      {text}
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
