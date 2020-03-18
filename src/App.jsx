import React from "react";
import "./App.module.scss";
import Routes from "./containers/Routes";
import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <section className={styles.mainBody}>
        <Routes />
      </section>
    </>
  );
};

export default App;
