// state 객체 안에 여러 개의 값 ⭕️
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    // state 안에 fixedNumber라는 다른 값 추가
    // 버튼이 클릭될 때 fixedNumber 값은 그대로 두고 number 값만 바꿔볼 것
    // 하지만 그렇다고해서 setState 함수를 사용할 때 인자로 전달되는 개체 내부에 fixedNumber를 넣어주진 않았음
    // setState 함수에 인자로 fixedNumber를 전달해주지 않았기 때문에, 맨 위의 숫자만 업데이트되는 것
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
