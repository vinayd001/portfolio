import React from "react";
import "../../../src/styles.css";

export default function Achievements() {
  return (
    <div className="Achievements">
      <div className="header">
        <div className="reach-out">
          <span className="close dot">x</span>
          <span className="minimize dot">-</span>
          <span className="expand dot">
            <span className="rotate">{"<>"}</span>
          </span>
        </div>
        <div className="headimg">Achievements</div>
      </div>

      <div className="content-container">
        <div className="container">
          <div id="box">
            <img
              id="projects-logo box"
              src={require(`../../../src/Images/emoji-i.png`)}
              style={{
                width: "100%",
                boxShadow:
                  "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",

                border: "0.5px solid"

                // boxShadow: "1px 1px 2px 2px #888888"
              }}
              alt="projects-img"
            />
          </div>
          <div id="content">
            <div className="project-title">Emoji Interpreter</div>
            <div className="hashtags">
              <span>#html</span>
              <span>#css</span>
              <span>#reactjs</span>
            </div>
            <div className="project-info">
              An app made using ReactJS. It can give the meaning of emoji
              entered in the search box, you can also click/tap the emojis
              displayed on the page to know their meaning.
            </div>
          </div>
        </div>
        <div className="container">
          <div id="box">
            <img
              id="projects-logo box"
              src={require(`../../../src/Images/emoji-i.png`)}
              style={{
                width: "100%",
                boxShadow:
                  "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",

                border: "0.5px solid"
                // boxShadow: "1px 1px 2px 2px #888888"
              }}
              alt="projects-img"
            />
          </div>
          <div id="content">
            <div className="project-title">Emoji Interpreter</div>
            <div className="hashtags">
              <span>#html</span>
              <span>#css</span>
              <span>#reactjs</span>
            </div>
            <div className="project-info">
              An app made using ReactJS. It can give the meaning of emoji
              entered in the search box, you can also click/tap the emojis
              displayed on the page to know their meaning.
            </div>
          </div>
        </div>
        <div className="container">
          <div id="box">
            <img
              id="projects-logo box"
              src={require(`../../../src/Images/emoji-i.png`)}
              style={{
                width: "100%",
                boxShadow:
                  "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",

                border: "0.5px solid"
                // boxShadow: "1px 1px 2px 2px #888888"
              }}
              alt="projects-img"
            />
          </div>
          <div id="content">
            <div className="project-title">Emoji Interpreter</div>
            <div className="hashtags">
              <span>#html</span>
              <span>#css</span>
              <span>#reactjs</span>
            </div>
            <div className="project-info">
              An app made using ReactJS. It can give the meaning of emoji
              entered in the search box, you can also click/tap the emojis
              displayed on the page to know their meaning.
            </div>
          </div>
        </div>
        <div className="container">
          <div id="box">
            <img
              id="projects-logo box"
              src={require(`../../../src/Images/emoji-i.png`)}
              style={{
                width: "100%",
                boxShadow:
                  "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",

                border: "0.5px solid"
                // boxShadow: "1px 1px 2px 2px #888888"
              }}
              alt="projects-img"
            />
          </div>
          <div id="content">
            <div className="project-title">Emoji Interpreter</div>
            <div className="hashtags">
              <span>#html</span>
              <span>#css</span>
              <span>#reactjs</span>
            </div>
            <div className="project-info">
              An app made using ReactJS. It can give the meaning of emoji
              entered in the search box, you can also click/tap the emojis
              displayed on the page to know their meaning.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
