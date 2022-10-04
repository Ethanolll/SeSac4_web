// this.setState에 객체 대신 함수 인자 전달
import React, { Component } from "react";

// constructor 부분만 수정해주면 됨!
// 이렇게 하면 constructor 메서드를 선언하지 않고도 state의 초깃값을 설정할 수 있음
class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        {/* this.setState를 사용하여 state 값을 업데이트 할 떄는 상태가 비동기적으로 업데이트됨  */}
        {/* onClick에 설정한 함수 내부에서 this.setState를 두 번 호출하면? */}
        {/* 이렇게 코드를 작성하면 this.setState를 두 번 사용하는 것임에도 불구하고 버튼을 클릭할 때 숫자가 1씩 더해질 것 */}
        {/* this.setState를 사용한다고 해서 state 값이 바로 바뀌지는 않기 때문 */}
        {/* 이에 대한 해결책으로 this.setState를 사용할 때 함수를 인자로 넣어줄 수 있음 */}
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 완전히 똑같은 기능을 함
            // 아래 코드는 함수에서 바로 객체를 반환
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
