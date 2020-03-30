import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import logos from "../../assets/logos/black-logo.png";
import Button from "../Button";
import data from "../../data/index.json";
import { Link } from "@reach/router";

const mainLinks = [
  { name: "Dashboard", path: "../dashboard" },
  { name: "Diet plan", path: "../nutrients-page" },
  { name: "Health", path: "../nutrients-page" },
  { name: "Nutrient breakdown", path: "../priorities-page" },
  { name: "Recipes", path: "../nutrients-page" },
  { name: "Genetics", path: "../nutrients-page" },
  { name: "Profile", path: "../nutrients-page" }
];

const getLinks = link => {
  return (
    <>
      <Link to={link.path} className={styles.link}>
        <p>{link.name}</p>
      </Link>
    </>
  );
};

console.log(data["user-dashboard"]);

const currentPage = "Dashboard";

const NavBar = props => {
  const { signOut } = props;
  const [navVisibility, toggleOpen] = useState(false);
  const [linkVisibility, displayLinks] = useState(false);

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

  const display = linkVisibility ? "" : styles.display;

  window.onresize = () => {
    window.innerWidth >= 768 ? toggleOpen(true) : toggleOpen(false);
    window.innerWidth >= 768 ? displayLinks(true) : displayLinks(false);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      toggleOpen(true);
      displayLinks(true);
    }
  }, []);

  const linksMap = () => {
    setTimeout(() => {
      displayLinks(!linkVisibility);
    }, 300);
  };

  const handleClick = () => {
    toggleOpen(!navVisibility);
    linksMap();
  };

  return (
    <>
      <div className={styles.navMargin}></div>
      <div className={`${styles.navBar} `} style={toggleNav.height}>
        <section className={styles.navTop}>
          <div className={styles.logoBurgerFlex}>
            <img src={logos} alt="Logo" className={styles.navBarLogo}></img>
            <p style={toggleNav.showCurrentPage}>{currentPage}</p>
            <button
              onClick={handleClick}
              className={`${styles.burgerMenu} ${switchBurgerIcon}`}
            ></button>
          </div>
          <div className={`${styles.links} ${display}`} style={toggleNav.hide}>
            <p className={styles.navLine}></p>
            {mainLinks.map(getLinks)}
            <p className={styles.link} onClick={signOut}>
              Log Out
            </p>
            <p className={styles.navLine}></p>
          </div>
        </section>
        <section
          className={`${styles.navBottom} ${display}`}
          style={toggleNav.hide}
        >
          <p className={styles.link}>Ask a question</p>
          <p className={styles.link}>T&Cs</p>
          <p className={styles.link}>Legal stuff</p>
          <div className={styles.btn}>
            <Button btnText={"Join us on Facebook"} />
          </div>
        </section>
      </div>
    </>
  );
};

export default NavBar;
