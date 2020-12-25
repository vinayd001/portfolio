import React from "react";
import "./styles.css";

import Achievements from "./Components/Apps/Achievements";
import Projects from "./Components/Apps/Projects";
import Skills from "./Components/Apps/Skills";
import Social from "./Components/Apps/Social";

export default function Window(props) {
  function renderSwitch(appName) {
    switch (appName) {
      case "achievement":
        return <Achievements />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "social":
        return <Social />;
      default:
        return <Achievements />;
    }
  }
  return <div className="Window">{renderSwitch(props.name)}</div>;
}
