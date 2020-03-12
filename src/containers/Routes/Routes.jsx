import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NotFound from "../NotFound";
import PrioritiesPage from "../PrioritiesPage";

const Routes = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="priorities-page" />
      <HomePage path="home-page" />
      <PrioritiesPage path="priorities-page" />
      <NotFound default />
      
    </Router>
  );
};

export default Routes;
