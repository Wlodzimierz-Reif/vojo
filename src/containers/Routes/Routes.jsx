import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";

const Routes = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="home-page" />
      <HomePage path="home-page" />
      <NutrientsPage path="nutrients-page" />
      <NotFound default />
    </Router>
  );
};

export default Routes;
