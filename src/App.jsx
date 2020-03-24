import React from "react";
import "./App.module.scss";
import { navigate } from "@reach/router";
import Routes from "./containers/Routes";
import { useState, useEffect } from "react";
import firebase, { provider } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);

  const signInWithRedirect = () => {
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(() => {
        navigate("/priorities-page");
      });
  };

  const getUser = () => {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        alert("You have signed out");
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <>
      {/* <Routes /> */}
      <Routes signOut={signOut} signIn={signInWithRedirect} />
    </>
  );
};

export default App;
