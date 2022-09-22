import React, { Component } from "react";
import "./ComponentTest1.css";

class ComponentTest1 extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <h1>Component Test</h1>
        <div className="my_style">{this.props.name}</div>
      </div>
    );
  }
}

export default ComponentTest1;
