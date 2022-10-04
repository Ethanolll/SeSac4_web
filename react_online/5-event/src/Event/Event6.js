// input이 여러 개 일때 이벤트를 다루는 법
// e.target.name 값을 사용
// name -> input의 name을 말함
// 지금은 message
// name이 username인 input을 하나 만들어주었고, state에도 username 값을 추가해줌
// eventChange, eventClick도 조금 바뀜
import React, { Component } from "react";

class Event extends Component {
  state = {
    username: "",
    message: "",
  };
  // key를 []로 감싸면 그 안에 넣은 실제 값이 key 값으로 사용됨
  eventChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  eventClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  eventKeyPress = (e) => {
    if (e.key === "Enter") {
      this.eventClick();
    }
  };

  render() {
    return (
      <div>
        <h1>리액트의 이벤트!!</h1>

        <input
          type="text"
          name="username"
          placeholder="사용자 이름"
          value={this.state.username}
          onChange={this.eventChange}
        />

        <input
          type="text"
          name="message"
          placeholder="이곳에 입력해보세요."
          value={this.state.message}
          onChange={this.eventChange}
          onKeyPress={this.eventKeyPress}
        />

        <button onClick={this.eventClick}>클릭</button>
      </div>
    );
  }
}

export default Event;
