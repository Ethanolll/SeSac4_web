import React, { Component } from "react";
import PropTypes from "prop-types";

class PropsTest3 extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <h1>Props Test3</h1>
        <h1>{this.props.text}</h1>
        <button onClick={console.log(this.props.valid)}>콘솔 메세지</button>
        <h1>{this.props.text2}</h1>
        <button onClick={console.log(this.props.valid2)}>콘솔 메세지</button>
      </div>
    );
  }

  static propTypes = {
    text: PropTypes.string,
  };
}

PropsTest3.defaultProps = {
  text2: "이건 기본 text props입니다.",
  valid2: "이건 기본 valid입니다.",
};

export default PropsTest3;
