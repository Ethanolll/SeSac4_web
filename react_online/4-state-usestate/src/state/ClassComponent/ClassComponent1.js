import React, { Component } from "react";

class Counter extends Component {
  // 컴포넌트에 state를 설정할 때 constructor 메서드 작성하여 설정
  // 컴포넌트의 생성자 메서드
  // 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해줘야함
  // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해 줌
  constructor(props) {
    super(props);

    // this.state 값에 초깃값을 설정
    this.state = {
      number: 0,
    };
  }

  // render 함수에서 현재 state를 조회할 때는 this.state를 사용하면 됨
  // button 안에 onClick이라는 값을 props로 넣어줌 -> 버튼이 클릭될 때 호출시킬 함수를 설정할 수 있게 도와줌
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        {/* 이벤트로 설정할 함수를 넣어줄 때는 화살표 함수 문법을 사용하여 넣어주어야 함 */}
        {/* 함수 내부에서 this.setState라는 함수가 사용 -> 이 함수는 state 값을 바꿀 수 있게 해줌 */}
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
