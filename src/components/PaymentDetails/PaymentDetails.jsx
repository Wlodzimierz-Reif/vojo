import React from "react";
import styles from "./PaymentDetails.module.scss";
import InputLabel from "../InputLabel/InputLabel";
import InputField from "../InputField/InputField";

const PaymentDetails = () => {
  return (
    <>
      <section className={styles.inputContainer}>
        <h3>Payment Details</h3>
        <div className={styles.info}>
          <p>Your Information</p>
          <div>
            <InputField type="text" name="full name" placeholder="Full Name" />
          </div>
          <div>
            <InputField type="email" name="email" placeholder="Email" />
          </div>
        </div>

        <div className={styles.cardContainer}>
          <p>Card Details"</p>
          <div>
            <InputField
              type="text"
              name="card number"
              placeholder="Card Number"
              className={styles.input}
            />
          </div>
          <div className={styles.cardInfo}>
            <InputField type="text" name="CVV" placeholder="CVV" />
            <InputField type="text" name="CVV" placeholder="MM / YY" />
            <InputField type="text" name="CVV" placeholder="Postal Code" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentDetails;
