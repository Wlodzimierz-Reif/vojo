import React from "react";
import styles from "./PriorityBox.module.scss";

const PriorityBox = ({ props }) => {
  const {
    priorityBoxNum,
    priorityBoxHeading,
    priorityBoxLink,
    priorityBoxLinkText
  } = props;

  return (
    <>
      <div className={styles.priorityBoxCont}>
        <div>
          <p>{priorityBoxNum}</p>
        </div>
        <h4>{priorityBoxHeading}</h4>
        <a href={priorityBoxLink}>{priorityBoxLinkText}</a>
      </div>
    </>
  );
};

export default PriorityBox;
