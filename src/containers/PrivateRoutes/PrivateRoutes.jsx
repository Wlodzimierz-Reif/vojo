import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import Footer from "../../components/Footer";
import firebase from "../../firebase";

const PrivateRoutes = props => {
  const { children } = props;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        navigate("/landing-page");
      }
    });
  });

  return (
    <>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default PrivateRoutes;
