import React from "react";
import styles from "./PaymentPage.module.scss";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PayButton from "../../components/PayButton/PayButton";

const PaymentPage = () => {
  return (
    <>
      <h1>Review & Complete Your Order</h1>
      <section>
        <div className={styles.paymentDetails}>
          <PaymentDetails />
        </div>
        <div className={styles.orderSummary}>
          <OrderSummary />
          <PayButton btnText={"Pay with Paypal"} isPaypal={true} />
          <PayButton btnText={"Pay Now"} isPaypal={false} />
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
