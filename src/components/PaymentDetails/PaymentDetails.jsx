import React from "react";
import styles from "./PaymentDetails.module.scss";
import InputLabel from "../InputLabel/InputLabel";
import InputField from "../InputField/InputField";

const PaymentDetails = () => {
  return (
    <>
      <section>
        <div>
          <h3>Payment Details</h3>
          <InputLabel isPrimary={true} labelName="Your Information" />
          <InputField type="text" name="full name" placeholder="Full Name" />
          <InputField type="email" name="email" placeholder="Email" />
        </div>

        <div>
          <InputLabel isPrimary={true} labelName="Card Details" />
          <InputField
            type="text"
            name="card number"
            placeholder="Card Number"
          />
          <div>
            <div>
              <InputField type="text" name="CVV" placeholder="CVV" />
              <InputField type="text" name="CVV" placeholder="MM / YY" />
              <InputField type="text" name="CVV" placeholder="Postal Code" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentDetails;
