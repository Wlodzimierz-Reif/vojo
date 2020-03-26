import React from "react";
import styles from "./ModalBox.module.scss";
import Button from "../Button";

const ModalBox = props => {
  const { title, message, handleClick } = props;

  return (
    <div className={styles.modal}>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
        <section className={styles.button}>
          <Button btnText="Close" handleClick={handleClick} />
        </section>
      </div>
    </div>
  );
};

export default ModalBox;
