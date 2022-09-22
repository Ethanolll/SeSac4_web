import React, { Component } from "react";
import "./ComponentTest1.css";

class ComponentTest1 extends Component {
  render() {
    const name = "박자연";
    const my_style = {
      backgroundColor: "paleturquoise",
      color: "dodgerblue",
      padding: "12px",
      fontSize: "40px",
    };

    return (
      // <div>
      //   <h1>Component Test</h1>
      //   <div className="my_style">{this.props.name}</div>
      // </div>
      <div>
        <h1>Component Test</h1>
        <div style={my_style}>{name}</div>
      </div>
    );
  }
}

export default ComponentTest1;
