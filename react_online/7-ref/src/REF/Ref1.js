// state를 사용하여 기능을 구현했지만, state만으로는 구현하지 못하는 기능 ⭕️
// 예를 들어, 특정 input에 포커스를 주는 것, 스크롤 박스를 조작하는 것 등
// 이땐 어쩔 수 없이 DOM에 접근해야 하는데 이때 바로 ref를 사용
// ref를 사용하는 방법 중 하나 => 콜백 함수 사용
// ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해주면 됨
// 이 콜백 함수는 ref 값을 파라미터로 전달받음
// 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해줌
// 이렇게 하면 앞으로 this.input은 input요소의 DOM을 가리킴
// DOM 타입과 상관없이 this.apple = ref 이렇게 마음대로 지어주면 됨
import React, { Component } from "react";

class Refsample extends Component {
  // createRef를 사용하여 ref를 만들려면 우선 컴포넌트 내부에서 변수에 React.createRef()를 담아주어야 함
  // 그리고 해당 변수를 ref를 달고자 하는 요소에 ref prop로 넣어주면 ref 설정이 완료됨
  input = React.createRef();

  // 그리고 ref를 설정해준 DOM에 접근하려면 this.input.current를 조회하면 됨
  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default Refsample;
