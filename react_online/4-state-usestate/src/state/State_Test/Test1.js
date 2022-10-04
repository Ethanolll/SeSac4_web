// 클래스형 컴포넌트를 만들어주세요.
// 숫자의 초깃값은 0으로 설정해주세요.
// +2라는 버튼을 만들고, 이 버튼을 클릭했을 시 숫자가 2씩 증가하도록 해주세요.
// -1이라는 버튼을 만들고, 이 버튼을 클릭했을 시 숫자가 1씩 감소하도록 해주세요.

import React, { Component } from "react";

class State_ex extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>

        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>

        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default State_ex;
