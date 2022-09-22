import "./PropsTest2.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import image from "/Users/nature/Desktop/SeSac4_web/react/220922/src/image.jpg";

class PropsTest2 extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <h1>Props Test2</h1>
        <div className="main">
          <div className="book">
            <h1>이번주 베스트셀러</h1>
            <img src={image}></img>
            <h2>나의 하루는 4시 40분에 시작된다</h2>
          </div>
          <div className="book2">
            <h3>저자: {this.props.author}</h3>
            <h3>판매가: {this.props.money}원</h3>
            <h3>구분: {this.props.type}</h3>
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    author: PropTypes.string,
    money: PropTypes.number.isRequired,
    type: PropTypes.string,
  };
}

PropsTest2.defaultProps = {
  author: "기본값",
  money: "기본가격",
  type: "기본구분",
};

export default PropsTest2;
