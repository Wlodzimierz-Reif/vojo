import React, { useEffect } from "react";
import styles from "./PrivateRoutes.module.scss";
import { redirectTo } from "@reach/router";
import Footer from "../../components/Footer";

const PrivateRoutes = props => {
  const { children, user } = props;

  useEffect(() => {
    if (!user) {
      redirectTo("/");
    }} );

  return <>
  { children }
  <Footer/>
  </>;
};

export default PrivateRoutes;
