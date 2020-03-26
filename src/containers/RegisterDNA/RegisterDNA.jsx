import React from "react";
import styles from "./RegisterDNA.module.scss";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import DNAimage from "../../assets/misc/barcode.jpg";
import { useState } from "react";
import { firestore } from "../../firebase";

const RegisterDNA = props => {
  const { user, userData } = props;
  const [userBarcode, updateUserBarcode] = useState("");

  const addToDb = () => {
    firestore
      .collection("users")
      .doc(user.uid)
      .update({
        geneticGUID: userBarcode
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <section className={styles.dnaRegister}>
      <h2>Register your DNA kit</h2>
      <h3>Find your barcode number</h3>
      <p>Your barcode can be found on the instructions and sample tube</p>
      <img src={DNAimage} alt="DNA tube test and barcode" />
      <div className={styles.input}>
        <InputField
          type="text"
          name="DNA ID"
          placeholder="Input your barcode here"
          handleInput={event => updateUserBarcode(event.target.value)}
          selectInput={inputVal => {}}
        />
      </div>
      <div className={styles.button}>
        <Button btnText="Submit DNA barcode" handleClick={addToDb} />
      </div>
    </section>
  );
};

export default RegisterDNA;
