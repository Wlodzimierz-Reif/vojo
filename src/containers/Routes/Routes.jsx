import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import PrioritiesPage from "../PrioritiesPage";
import Footer from "../../components/Footer";
import RegisterDNA from "../RegisterDNA";


const Routes = () => {
  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="priorities-page" />
        <HomePage path="home-page" />
        <NutrientsPage path="nutrients-page" />
        <PrioritiesPage path="priorities-page" />
        <RegisterDNA path="register-dna" />
        <NotFound default />
      </Router>
      <Footer />
    </>
  );
};

export default Routes;
