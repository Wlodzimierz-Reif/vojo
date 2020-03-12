import React, { useState } from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = props => {
  const { text, value, startChecked, selectRadio } = props;

  // const { text, startChecked } = props;
  const [isChecked, toggleCheckedState] = useState(startChecked);

  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        value={value}
        // onClick={() => toggleCheckedState(!isChecked)}
        onInput={event => selectRadio(event.target.value)}
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
