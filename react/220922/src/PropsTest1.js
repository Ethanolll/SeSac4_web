import "./PropsTest1.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
// import React from "react";

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

// const PropsTest1 = (props) => {
//   return (
//     <h1>
//       제가 좋아하는 음식은
//       <span style={{ color: "red" }}> {props.food}</span>
//       입니다.
//     </h1>
//   );
// };

PropsTest1.defaultProps = {
  food2: "기본값",
};

export default PropsTest1;
