import React from "react";
import styles from "./NavBar.module.scss";
import logos from "../../assets/logos/tofu-logo.png";

const getLinks = link => {
  return <p> {link} </p>;
};

const NavBar = props => {
  const { links, signOut } = props;

  return (
    <section className={styles.navBar}>
      <img src={logos} alt="Logo" className={styles.navBarLogo} />
      <section className={styles.links}>
        {links.map(getLinks)}
        <p className={styles.logOut} onClick={signOut}>
          Log out
        </p>
      </section>
    </section>
  );
};

export default NavBar;
