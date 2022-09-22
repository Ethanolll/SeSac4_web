import React, { Component } from "react";
import "./ComponentTest2.css";
import image from "/Users/nature/Desktop/SeSac4_web/react/220922/src/image.jpg";

class ComponentTest2 extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <div className="style">
          <h2>안녕하세요</h2>
          <img src={image}></img>
        </div>
      </div>
    );
  }
}

export default ComponentTest2;
