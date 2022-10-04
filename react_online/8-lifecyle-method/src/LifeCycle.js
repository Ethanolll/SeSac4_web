import React, { Component } from "react";
import LifeCycle1 from "./LifeCycle1";

// getRandomColor 함수에서 state의 color 값을 랜덤 색상으로 설정하기 때문
// 여기서 16777215를 16진법으로 나타내면 ffffff가 되므로 해당 코드는 000000부터 ffffff 값을 반환하게 됨
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>

        <LifeCycle1 color={this.state.color} />
      </div>
    );
  }
}

export default App;
