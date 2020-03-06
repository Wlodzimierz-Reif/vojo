import React from "react";
import styles from "./App.module.scss";
// import MaintenancePage from "./components/MaintenancePage";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";

const App = () => {
  return (
    <>
      <section className="button">
        <h2>Button Component</h2>
        <div className={styles.buttonContainer}>
          <Button btnText="Button" />
        </div>
      </section>

      <section className="CheckBox">
        <h2>CheckBox Component</h2>
        <div className={styles.checkBoxContainer}>
          <CheckBox text="Default off" startChecked={false} />
          <CheckBox text="Default on" startChecked={true} />
        </div>
      </section>
    </>
    // <div className={styles.maintenanceContainer}>
    //   <MaintenancePage />
    // </div>
  );
};

export default App;
