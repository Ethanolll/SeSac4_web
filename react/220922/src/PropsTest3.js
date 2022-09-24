import React, { Component } from "react";
import PropTypes from "prop-types";

class PropsTest3 extends Component {
  my_func = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Props Test3</h1>
        <h1>{this.props.text}</h1>
        <button
          onClick={() => {
            this.my_func(this.props.valid);
          }}
        >
          콘솔 메세지
        </button>
      </div>
    );
  }

  static propTypes = {
    text: PropTypes.string,
  };
}

PropsTest3.defaultProps = {
  text: "이건 기본 text props입니다.",
  valid: "이건 기본 valid입니다.",
};

export default PropsTest3;
