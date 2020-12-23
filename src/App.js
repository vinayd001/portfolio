import React from "react";
import "./styles.css";

export default function App(props) {
  return (
    <div className="App" onClick={props.updateStateOnClick}>
      <img
        className="app-logo"
        src={require(`./Images/${props.image}.png`)}
        alt="achievements"
      />
    </div>
  );
}
