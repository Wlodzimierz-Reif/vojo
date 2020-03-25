import React from "react";
import "./App.module.scss";
import Routes from "./containers/Routes";
import { useState, useEffect } from "react";
import firebase, { provider } from "./firebase";
import { navigate } from "@reach/router";

const App = () => {
  const [user, setUser] = useState(null);

  const signInWithRedirect = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("home-page");
      }
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

// const getUser = () => {
//   firebase
//     .auth()
//     .getRedirectResult()
//     .then(result => {
//       setUser(result.user);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
