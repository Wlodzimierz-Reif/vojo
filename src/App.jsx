import React from "react";
import "./App.module.scss";
import Routes from "./containers/Routes";
import { useState, useEffect } from 'react';
import firebase, { provider } from "./firebase";



const App = () => {

  const [user, setUser] = useState(null);

  const signInWithRedirect = () => {
    firebase.auth().signInWithRedirect(provider)
  };

  const getUser = () => {
    firebase.auth()
    .getRedirectResult()
    .then(result => {
      if (result.credential) {
        const token = result.credential.accessToken
      }
      const user = result.user;
      setUser(user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
  };

  const signOut = () => {
    firebase.auth()
    .signOut()
    .then(() => {
    setUser(null);
    alert("You have signed out");
    })
    .catch(error => {
      alert("error")
    });
  };

  useEffect(() => {
    getUser();
  }, []);



  return (
    <>
      <Routes signOut={signOut} signIn={signInWithRedirect}/>
    </>
  );
};

export default App;
