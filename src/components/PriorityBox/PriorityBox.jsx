import React from "react";
import styles from "./PriorityBox.module.scss";
import { Link } from "@reach/router";

const PriorityBox = props => {
  const {
    priorityBoxNum,
    priorityBoxHeading,
    priorityBoxLink,
    priorityBoxLinkText
  } = props;

  return (
    <div className={styles.priorityBoxCont}>
      <div>
        <p>{priorityBoxNum}</p>
      </div>
      <h4>{priorityBoxHeading}</h4>
      <Link to={priorityBoxLink}>{priorityBoxLinkText}</Link>
    </div>
  );
};

export default PriorityBox;
