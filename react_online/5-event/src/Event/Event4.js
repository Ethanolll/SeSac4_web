// 리액트에서 이벤트를 사용할 땐 함수 형태의 값을 전달해야한다고 배움
// 그 대신 함수를 미리 준비하여 전달하는 방법도 있음
// onChange와 onClick에 전달한 함수를 따로 빼서 컴포넌트 임의 메서드로 만들어볼 것
import React, { Component } from "react";

class Event extends Component {
  state = {
    message: "",
  };
  // bind는 this가 현재 컴포넌트, 즉 컴포넌트 자신을 제대로 가리키기 위해 사용
  // 함수가 호출될 때 this는 호출부에 따라 결정되는데, 임의 메서드가 특정 html 요소의 이벤트로 등록되면서 메서드와 this의 관계가 끊어지게 됨
  // 따라서 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신을 가리키게 하기 위해서 메서드를 this와 바인딩하는 작업이 필요
  // 만약 바인딩을 하지 않는다면 this는 undefined를 가리키게 될 것
  // 따라서 이 constructor 함수에서는 함수를 바인딩하는 작업을 하고 있는 것
  constructor(props) {
    super(props);
    this.eventChange = this.eventChange.bind(this);
    this.eventClick = this.eventClick.bind(this);
  }

  // 메서드 이름을 정하고 아까 우리가 써준 코드를 그대로 써줌
  eventChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  eventClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <div>
        <h1>리액트의 이벤트!!</h1>

        <input
          type="text"
          name="message"
          placeholder="이곳에 입력해보세요."
          value={this.state.message}
          onChange={this.eventChange}
        />

        <button onClick={this.eventClick}>클릭</button>
      </div>
    );
  }
}

export default Event;
