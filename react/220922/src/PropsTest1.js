import "./PropsTest1.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
class PropsTest1 extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <h1>Props Test1</h1>
        <p>
          좋아하는 음식: <span className="food">{this.props.food}</span>
        </p>
        <p>
          좋아하는 음식: <span>{this.props.food2}</span>
        </p>
      </div>
    );
  }

  static propTypes = {
    name: PropTypes.string,
  };
}

PropsTest1.defaultProps = {
  food2: "기본값",
};

export default PropsTest1;
