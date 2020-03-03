import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <section className={styles.navBar}>
      <img src="prompt" alt="Logo"></img>
      <section className={styles.links}>
        <p>Priorities</p>
        <p>Nutrients</p>
        <p>Diet</p>
        <p>Health</p>
        <p>Genetics</p>
        <p>Answers</p>
        <p>Settings</p>
        <p className={styles.LogOut}>Log out</p>
      </section>
    </section>
  );
};

export default NavBar;
