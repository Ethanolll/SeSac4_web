import React, { Component } from "react";
import "./ComponentTest2.css";
import image from './image.jpg';

class ComponentTest2 extends Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20px",
    };

    return (
      <div>
        <div className="style">
          <h2>안녕하세요</h2>
          <img src={image}></img>
        </div>
      </div>
      // 답
      // <div style={style}>
      //   <h2>안녕하세요</h2>
      //   <img src={image} width=" 500px" />
      // </div>
    );
  }
}

export default ComponentTest2;
