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

  handleClick = (index) => {
    this.setState({
      window: <Window index={index} />
    });
  };

  render() {
    return (
      <div className="Desktop">
        {this.state.window}
        <Dock onClick={(index) => this.handleClick(index)} />
      </div>
    );
  }
}

export default Desktop;
