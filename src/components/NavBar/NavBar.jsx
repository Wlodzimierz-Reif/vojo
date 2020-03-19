import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import logos from "../../assets/logos/black-logo.png";

const mainLinks = [
  { name: "Dashboard" },
  { name: "Diet plan" },
  { name: "Nutrient breakdown" },
  { name: "Recipes" },
  { name: "Genetics" },
  { name: "Profile" },
  { name: "Settings" }
];

const getLinks = link => {
  return <p> {link.name} </p>;
};

// const currentPage = "Dashboard";

const NavBar = (props) => {

  // const { currentPage } = props;
  const [navVisibility, toggleOpen] = useState(false);

  let switchBurgerIcon = navVisibility === true ? styles.burgerMenuCross : styles.burgerMenuIcon;


  return (
    <>
    <div className={styles.navBar}>
      <div className={styles.logoBurgerFlex}>
        <img src={logos} alt="Logo" className={styles.navBarLogo}></img>
        {/* <p>{currentPage}</p> */}
        <button onClick={() => toggleOpen(!navVisibility)} 
        className={`${styles.burgerMenu} ${switchBurgerIcon}`}></button>
      </div>     
      <section className={styles.links}>
        <span className={styles.navLine}></span>
        {mainLinks.map(getLinks)}
        <span className={styles.navLine}></span>
      </section>
      <section className={styles.navBottom}>
        <p>Ask a question</p>
        <p>T&Cs</p>
        <p>Legal stuff</p>
      </section>
    </div>
    </>
    
  );
};

export default NavBar;
