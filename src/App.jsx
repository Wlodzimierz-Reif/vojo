import React from "react";
// import styles from "./App.module.scss";
import Router from "../src/containers/Routes";
// import NavBar from "./components/NavBar";
// import VegPictureBox from "./components/VegPictureBox";
import DietBreakdown from "./containers/DietBreakdown";

const App = () => {
  return (
    <>
      <Router />
      <DietBreakdown
        brief={
          "Focus on a variety of colours. Spinach, broccoli and salad leaves are especially high in folate. Have starchy veg like potatoes occassionally, but as you have some genes related to blood sugar dysregulation, these are more likely to raise your blood sugar."
        }
      />
    </>
  );
};

export default App;
