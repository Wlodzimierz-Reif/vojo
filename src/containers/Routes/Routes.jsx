import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NotFound from "../NotFound";
import PrioritiesPage from "../PrioritiesPage";
import SupplementsPage from "../SupplementsPage";

const Routes = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="home-page" />
      <HomePage path="home-page" />
      <PrioritiesPage path="priorities-page" />
      <SupplementsPage path="supplements-page" />
      <NotFound default />
    </Router>
  );
};

export default Routes;
