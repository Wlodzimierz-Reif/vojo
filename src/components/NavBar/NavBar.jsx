import React from "react";
import styles from "./NavBar.module.scss";
import logos from "../../assets/logos/tofu-logo.png";
import { Link } from "@reach/router";

// TO BE HANDED IN AS PROPS (SEE MATE AND DENNIS!!! )
// const exampleLinks = [
//   "Priorities",
//   "Nutrients",
//   "Diet",
//   "Health",
//   "Genetics",
//   "Answers",
//   "Settings"
// ];

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
        <Link to="../../register-dna">Register DNA</Link>
        <p className={styles.logOut} onClick={signOut}>
          Log out
        </p>
      </section>
    </section>
  );
};

export default NavBar;
