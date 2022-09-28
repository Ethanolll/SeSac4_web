import React, { Component } from "react";
import "./Validation.css";

class Validation extends Component {
  state = {
    password: "", // password는 공백,
    clicked: false, // clicked 거짓,
    validated: false, // validated 거짓으로 지정
  }; // => 아직 검사를 하기 전이니까!

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    }); // input에서 OnChange 이벤트가 발생하면 handleChange를 호출하여 state의 password의 값을 업데이트하게 함
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    }); // button에서도 onClick 이벤트가 발생하면 handleButtonClick을 호출하여 cliked의 값을 참으로, validated 값을 검증 결과로 설정
    this.input.focus();
  };

  render() {
    return (
      <div>
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
        {/* input의 className 값은 버튼을 누르기 전에는 비어있는 문자열을 전달  */}
        {/* 버튼을 누른 후에는 검증 결과에 따라 success 또는 failure로 설정하게 됨 */}
        <button onClick={this.handleButtonClick}>검증</button>
      </div>
    );
  }
}

export default Validation;
