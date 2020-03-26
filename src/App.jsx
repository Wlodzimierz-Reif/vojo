import React from "react";
import "./App.module.scss";
import Routes from "../src/containers/Routes";
import { useState, useEffect } from "react";
import firebase, { provider } from "./firebase";
import { redirectTo } from "@reach/router";

const App = () => {
  const [user, setUser] = useState(null);

  const signInWithRedirect = () => {
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getUser = () => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          setUser(user);
        } else {
          redirectTo("/landing-page");
          setUser(null);
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
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
      <Routes signOut={signOut} signIn={signInWithRedirect} user={user} />
    </>
  );
};

export default App;
