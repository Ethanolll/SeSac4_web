// 콜백 함수를 사용하는 방식으로 ref를 사용
import React, { Component } from "react";
import "./Validation.css";

class Validation extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  // 버튼에서 onClick 이벤트가 발생할 때 input에 포커스를 주도록 수정
  // this.input이 컴포넌트 내부의 input 요소를 가리키고 있으니 DOM을 다루듯 작성하면 됨
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        {/* input 수정 */}
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증</button>
      </div>
    );
  }
}

export default Validation;
