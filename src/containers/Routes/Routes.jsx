import React from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import HomePage from "../HomePage";
import NotFound from "../NotFound";
import QuestionnairePage from "../QuestionnairePage";

const Routes = () => {
  return (
    <Router>
      <Redirect noThrow from="/" to="home-page" />
      <HomePage path="home-page" />
      <QuestionnairePage path="questionnaire-page" />
      <NotFound default />
    </Router>
  );
};

export default Routes;
