import React from "react";
import styles from "./NavBar.module.scss";
import logos from "../../assets/logos/tofu-logo.png";

const navBarLinks = [
  "Priorities",
  "Nutrients",
  "Diet",
  "Health",
  "Genetics",
  "Answers",
  "Settings"
];

const getLinks = link => {
  return <p> {link} </p>;
};

const NavBar = () => {
  return (
    <section className={styles.navBar}>
      <img src={logos} alt="Logo" className={styles.navBarLogo}></img>
      <section className={styles.links}>
        {navBarLinks.map(getLinks)}
        <p className={styles.logOut}>Log out</p>
      </section>
    </section>
  );
};

export default NavBar;
