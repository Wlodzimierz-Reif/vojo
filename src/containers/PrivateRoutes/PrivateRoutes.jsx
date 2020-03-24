import React, { useEffect } from "react";
import styles from "./PrivateRoutes.module.scss";
import { redirectTo } from "@reach/router";

const PrivateRoutes = props => {
  const { children, user } = props;

  useEffect(() => {
    if (!user) {
      redirectTo("/");
    }} );

  return <>{ children }</>;
};

export default PrivateRoutes;
