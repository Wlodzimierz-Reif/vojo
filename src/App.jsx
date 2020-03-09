import React, { useState } from "react";
import styles from "./App.module.scss";
// import MaintenancePage from "./components/MaintenancePage";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import DisplaySlider from "./components/DisplaySlider";
import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import InputLabel from "./components/InputLabel";
import InputField from "./components/InputField";
import PriorityBox from "./components/PriorityBox";
import VegPersonBox from "./components/VegPersonBox";
import VegPictureBox from "./components/VegPictureBox";
import Image from "./assets/characters/bean-1.svg";
import Image2 from "./assets/characters/bean-2.svg";
import RadioButton from "./components/RadioButton";

const App = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <>
      <RadioButton
        text="Vegan"
        question="vegan"
        value="isVegan"
        startChecked={true}
        selectRadio={input => setFormValues({ ...formValues, isVegan: input })}
      />
      <RadioButton
        text="Not Vegan"
        question="vegan"
        value="isNotVegan"
        selectRadio={input => setFormValues({ ...formValues, isVegan: input })}
      />
    </>
    // <div className={styles.maintenanceContainer}>
    //   <MaintenancePage />
    // </div>
  );
};

export default App;
