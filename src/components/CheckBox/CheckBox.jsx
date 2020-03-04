import React from "react";
import styles from "./CheckBox.module.scss";
import Tick from "../../assets/graphic-devices/black-straw.svg";

const CheckBox = props => {
  const { text } = props;
  return (
    <label className={styles.container}>
      <input type="checkbox" />
      {text}
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
