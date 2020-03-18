import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NutrientsPage from "../NutrientsPage";
import NotFound from "../NotFound";
import PrioritiesPage from "../PrioritiesPage";
import Dashboard from "../../containers/Dashboard"

const Routes = () => {
  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="dashboard" />
        <HomePage path="home-page" />
        <NutrientsPage path="nutrients-page" />
        <PrioritiesPage path="priorities-page" />
        <Dashboard path="dashboard" />
        <NotFound default />
      </Router>
    </>
  );
};

export default Routes;
