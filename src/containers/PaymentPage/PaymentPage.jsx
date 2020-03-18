import React from 'react';
import styles from './PaymentPage.module.scss';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import PayButton from '../../components/PayButton/PayButton';

const PaymentPage = () => {
	return (
    <>
    <div className={styles.header}>
      <h2>Review & Complete Your Order</h2>
    </div>
		<section className={styles.mainContainer}>
			<div className={styles.details}>
        <PaymentDetails />
      </div>
			<div className={styles.summary}>
        <OrderSummary title="Order Summary" nrOfItems="1" nameOfItem="DNA kit" totalPrice="£100"/>
      </div>
		</section>
    </>
	);
};

export default PaymentPage;
