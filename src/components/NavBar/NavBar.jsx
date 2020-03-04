import React from "react";
import styles from "./NavBar.module.scss";
import logos from "../../assets/logos/tofu-logo.png";

const NavBar = () => {
  return (
    <section className={styles.navBar}>
      <img src={logos} alt="Logo" className={styles.navBarLogo}></img>
      <section className={styles.links}>
        <p>Priorities</p>
        <p>Nutrients</p>
        <p>Diet</p>
        <p>Health</p>
        <p>Genetics</p>
        <p>Answers</p>
        <p>Settings</p>
        <p className={styles.logOut}>Log out</p>
      </section>
    </section>
  );
};

export default NavBar;
