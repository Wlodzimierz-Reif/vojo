import React, { useState } from "react";
import styles from "./PriorityBox.module.scss";
import CheckBox from "../CheckBox";
import { Link } from "@reach/router";

const PriorityBox = props => {
  const { prioNum, prioHead, prioText } = props;

  const [value, setValue] = useState(false);

  const handleCheckToggle = () => {
    if (value === true) {
      setValue(false);
    } else {
      setValue(true);
    }
  };

  return (
    <div className={styles.priorityBoxCont}>
      <div className={styles.prioNum}>
        <p>{prioNum}</p>
      </div>
      <h4>{prioHead}</h4>
      <p>{prioText}</p>
      <div className={styles.checkBox}>
        <div>
          <CheckBox
            selectCheckBox={() => handleCheckToggle()}
            startChecked={false}
          />
        </div>
        <p>I've done this!</p>
      </div>
      <h4>priorityBoxHeading</h4>
      <Link to="priorityBoxLink">priorityBoxLinkText</Link>
    </div>
  );
};

export default PriorityBox;
