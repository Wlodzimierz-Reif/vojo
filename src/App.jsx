import React from "react";
import "./App.module.scss";
import Routes from "./containers/Routes";
import DietBreakdown from "./containers/DietBreakdown/DietBreakdown";

const App = () => {
  return (
    <>
      <Routes />
      <DietBreakdown
        brief="Please stop looking at your phone and pet me good now the other hand, too find box a little too small and curl up with fur hanging out jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans and sit in a box for hours and lick human with sandpaper tongue.  "
      />
    </>
  );
};

export default App;
