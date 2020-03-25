import React from "react";
import "./App.module.scss";
import Routes from "../src/containers/Routes";
// import Routes from "./containers/Routes";
import { useState, useEffect } from "react";
import firebase, { provider } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);

  const signInWithRedirect = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const getUser = () => {
    firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        setUser(result.user);
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
  }, []);

  return (
    <>
      <Routes signOut={signOut} signIn={signInWithRedirect} user={user} />
    </>
  );
};

export default App;
