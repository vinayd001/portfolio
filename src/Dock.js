import React from "react";
import "./styles.css";
import App from "./App";

export default function Dock(props) {
  const images = [
    "achievements",
    "achievements",
    "achievements",
    "achievements"
  ];

  return (
    <div className="Dock">
      {images.map((name, index) => {
        return (
          <App
            key={index}
            image={name}
            updateStateOnClick={() => props.onClick(name)}
          />
        );
      })}
    </div>
  );
}
