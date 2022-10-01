// 함수형 컴포넌트
// function App() {
//   const name = "리액트";
//   return <div className="react">{name}</div>;
// }

// 클래스형 컴포넌트
import React, { Component } from "react";

class App extends Component {
  render() {
    const name = "react";
    return <div className="react">{name}</div>;
  }
}

export default App;
