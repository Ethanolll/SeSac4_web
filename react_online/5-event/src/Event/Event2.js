// state를 input에 사용
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
      </div>
    );
  }
}

export default Event;
