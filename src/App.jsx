import React from "react";
<<<<<<< HEAD
import styles from "./App.module.scss";
// import MaintenancePage from "./components/MaintenancePage";

import DietType from "./containers/DietType";

const App = () => {
  return (
    <>
      <DietType
        regionText={"South American"}
        dietText={
          "You are best suited to a South American-style diet. Think veganstyle Mexican cuisine, with some inspiration from Peru (think quinoa) and lots of 'Buddha bowls'. Focus you meals around lots of beans, rainbow veg and fresh salads, with a nice dose of healthy fats like avocado, nut butter or coconut. You can have some carbohydrates but make sure they are whole grains such as wild rice and quinoa. Use coconut or olive oil to cook with and avoid refined vegetable oils. As in Mexico, focus on having your big meals at breakfast or lunchtime, and a small meal early in the evening."
        }
      />
=======
// import styles from "./App.module.scss";
import Router from "../src/containers/Routes";
// import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Router />
>>>>>>> 8356ed3b3b75e9a87837cb8992720595603c2a6b
    </>
  );
};

export default App;
