import React from "react";
import "./styles.css";
import App from "./App";

export default function Dock(props) {
  const images = [
    "education",
    "achievement",
    "education",
    "achievement",
    "education",
    "achievement"
  ];

  return (
    <div className="Dock">
      {images.map((img, index) => {
        return (
          <App
            key={index}
            image={img}
            updateStateOnClick={() => props.onClick(index)}
          />
        );
      })}
    </div>
  );
}
