import React from "react";
import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NotFound from "../NotFound";

const Routes = () => {
  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="home-page" />
        <HomePage path="home-page" />
        <NotFound default />
      </Router>
    </>
  );
};

export default Routes;
