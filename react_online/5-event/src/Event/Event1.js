import React, { Component } from "react";

class Event extends Component {
  render() {
    return (
      <div>
        <h1>리액트의 이벤트!!</h1>
        {/* 콘솔에 기록되는 e 객체는 SyntheticEvent */}
        <input
          type="text"
          name="message"
          placeholder="이곳에 입력해보세요."
          //   onChange={(e) => {
          //     console.log(e);
          //   }}
          //   onChange 이벤트가 발생할 때, 인풋 값의 변화를 보고 싶다면 다음과 같이 코드를 수정
          //   무언가 값이 바뀔 때 그 값을 기록할 수 있음
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default Event;
