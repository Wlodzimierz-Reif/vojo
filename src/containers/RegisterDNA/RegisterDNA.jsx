import React from "react";
import styles from "./RegisterDNA.module.scss";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import DNAimage from "../../assets/misc/barcode-dna.jpg";
import { useState, useEffect } from "react";

const RegisterDNA = () => {
  const [userBarcode, updateUserBarcode] = useState("");

  const updateDB = () => {
    console.log(userBarcode);
  };

  return (
    <section className={styles.dnaRegister}>
      <h2>Register your DNA kit</h2>
      <h3>Find your barcode number</h3>
      <p>Your barcode can be found on the instructions and sample tube</p>
      <img src={DNAimage} alt="Picture of DNA tube test and barcode" />
      <div className={styles.input}>
        <InputField
          type="text"
          name="DNA ID"
          placeholder="Input your barcode here"
          handleInput={event => updateUserBarcode(event.target.value)}
        />
      </div>
      <div className={styles.button}>
        <Button btnText="Submit DNA barcode" handleClick={updateDB} />
      </div>
    </section>
  );
};

export default RegisterDNA;
