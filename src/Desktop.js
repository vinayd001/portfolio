import React from "react";
import "./styles.css";
import Dock from "./Dock";
import Window from "./Window";

class Desktop extends React.Component {
  constructor() {
    super();
    this.state = {
      window: null
    };
  }

  handleClick = (name) => {
    this.setState({
      window: <Window name={name} />
    });
  };

  render() {
    return (
      <div className="Desktop">
        {this.state.window}
        <Dock onClick={(name) => this.handleClick(name)} />
      </div>
    );
  }
}

export default Desktop;
