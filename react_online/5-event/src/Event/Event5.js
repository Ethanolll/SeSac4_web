// Event4.js의 코드를 좀 더 쉽게 작성하는 방법
// 앞서 메서드 바인딩을 constructor, 즉 생성자 메서드에서 하였는데 원래는 생성자 메서드에서 해주는 것이 정석
// 하지만 매번 생성자 메서드를 만들고 바인딩 해주고, 또 새로운 메서드를 만들때 마다 생성자 메서드를 수정하고.. 이런 작업이 좀 번거럽게 느껴짐
// 그럴 땐 다음과 같이 화살표 함수 형태로 메서드를 정의하면 좀 더 간단하게 작성할 수 있음
import React, { Component } from "react";

class Event extends Component {
  state = {
    message: "",
  };

  eventChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  eventClick = () => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  };

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
