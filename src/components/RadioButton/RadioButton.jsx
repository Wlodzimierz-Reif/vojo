import React, { useState } from "react";
import styles from "./RadioButton.module.scss";

const RadioButton = props => {
  const { text, question, value, startChecked, selectRadio } = props;

  return (
    <section className={styles.radioButton}>
      <input
        type="radio"
        name={question}
        value={value}
        onInput={event => selectRadio(event.target.value)}
        defaultChecked={startChecked}
      />
      <label for={question}>{text}</label>
    </section>
  );
};

export default RadioButton;
