import React from "react";
import "../../../src/styles.css";

export default function Social() {
  return (
    <div className="Achievement">
      <span className="close dot"></span>
      <span className="minimize dot"></span>
      <span className="expand dot"></span>
      <div className="container">
        <div id="box">
          <img
            id="projects-logo box"
            src={require(`../../../src/Images/projects.png`)}
            style={{
              width: "100%",
              border: "1px solid",
              boxShadow: "1px 1px 2px 2px #888888"
            }}
            alt="projects-img"
          />
        </div>
        <div id="content">
          <div className="project-name">Emoji Interpreter</div>
          <div className="project-info">
            An app made using ReactJS. It can give the meaning of emoji entered
            in the search box, you can also click/tap the emojis displayed on
            the page to know their meaning.
          </div>
        </div>
      </div>
    </div>
  );
}
