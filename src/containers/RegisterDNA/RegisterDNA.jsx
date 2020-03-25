import React from "react";
import styles from "./RegisterDNA.module.scss";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import DNAimage from "../../assets/misc/barcode.jpg";
import { useState } from "react";

const RegisterDNA = props => {
  const { user } = props;
  const [userBarcode, updateUserBarcode] = useState("");

  const addToDb = () => {
    console.log(user, userBarcode);
    // firestore
    //   .collection("users")
    //   .doc(user.uid)
    //   .set({
    //     geneticguid: userBarcode
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
          selectInput={inputVal => {
            // console.log(inputVal);
          }}
        />
      </div>
      <div className={styles.button}>
        <Button btnText="Submit DNA barcode" handleClick={addToDb} />
      </div>
    </section>
  );
};

export default RegisterDNA;
