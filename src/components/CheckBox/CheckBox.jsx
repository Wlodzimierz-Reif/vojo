import React, { useState } from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = props => {
  const { text, startChecked } = props;
  const [isChecked, toggleCheckedState] = useState(startChecked);

  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        onClick={() => toggleCheckedState(!isChecked)}
        defaultChecked={startChecked}
      />
      {text}
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;

//  in App.jsx, your jsx element should look like the below
//  <CheckBox text="option 1" startChecked={false} />
