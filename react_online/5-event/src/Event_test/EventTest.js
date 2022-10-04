// src 디렉터리 안에 ex 라는 폴더를 만들고, ex 폴더 안에 Handler_ex 라는 파일을 생성하세요.
// Handler_ex 컴포넌트는 클래스형 컴포넌트로 만들어주세요.
// state의 초기값을 Hello World!로 지정해주세요.
// 버튼을 하나 만들고, 버튼을 클릭했을 때 Hello World!가 Goodbye World! 로 변경되도록 이벤트를 지정해주세요.
import React, { Component } from "react";

class Handler_ex extends Component {
  state = {
    message: "Hello World!",
  };

  onClick = () => {
    this.setState({
      message: "Goodbye World",
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <br />
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Handler_ex;
