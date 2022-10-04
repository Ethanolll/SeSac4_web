// input 아래에 버튼을 하나 만들고 버튼을 누르면
// input 입력한 내용이 메세지로 뜨게 한 input을 공백으로 설정

import React, { Component } from "react";

class Event extends Component {
  state = {
    message: "",
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
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        {/* 버튼을 클릭하면 alert 함수가 실행되면서 input에 들어가있는 값이 메세지로 뜨게 됨 */}
        {/* 그리고 this.setState 메서드를 이용해 msg를 다시 공백으로 만들어줌 */}
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}

export default Event;
