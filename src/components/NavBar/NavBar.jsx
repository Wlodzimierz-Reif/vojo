import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import logos from "../../assets/logos/black-logo.png";
import Button from "../Button";
import data from "../../data/index.json";

const mainLinks = [
  { name: "Dashboard" },
  { name: "Diet plan" },
  { name: "Health" },
  { name: "Nutrient breakdown" },
  { name: "Recipes" },
  { name: "Genetics" },
  { name: "Profile" }
];

const getLinks = link => {
  return <p> {link.name} </p>;
};

console.log(data["user-dashboard"]);

const currentPage = "Dashboard";

const NavBar = props => {
  // const { currentPage } = props;
  const [navVisibility, toggleOpen] = useState(false);

  let switchBurgerIcon =
    navVisibility === true ? styles.burgerMenuCross : styles.burgerMenuIcon;

  const navOpen = {
    height: { height: "calc(100vh - 32px)" },
    showCurrentPage: { display: "none" }
  };

  const navClosed = {
    height: { height: "56px", borderBottom: "solid 2px $primary-background" },
    hide: { opacity: "0", transition: "0.2s" }
  };

  let toggleNav = navVisibility === true ? navOpen : navClosed;

  window.onresize = () => (window.innerWidth >= 768 ? toggleOpen(true) : toggleOpen(false));

  useEffect(() => {
    if (window.innerWidth >= 768) {
      toggleOpen(true);
    }
  }, []);

  return (
    <>
      <div className={`${styles.navBar} `} style={toggleNav.height}>
        <section className={styles.navTop}>
          <div className={styles.logoBurgerFlex}>
            <img src={logos} alt="Logo" className={styles.navBarLogo}></img>
            <p style={toggleNav.showCurrentPage}>{currentPage}</p>
            <button
              onClick={() => toggleOpen(!navVisibility)}
              className={`${styles.burgerMenu} ${switchBurgerIcon}`}
            ></button>
          </div>
          <div className={styles.links} style={toggleNav.hide}>
            <p className={styles.navLine}></p>
            {mainLinks.map(getLinks)}
            <p className={styles.navLine}></p>
          </div>
        </section>
        <section className={styles.navBottom} style={toggleNav.hide}>
          <p>Ask a question</p>
          <p>T&Cs</p>
          <p>Legal stuff</p>
          <Button btnText={"Join us on Facebook"} />
        </section>
      </div>
    </>
  );
};

export default NavBar;
