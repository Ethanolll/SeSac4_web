// 스크롤 박스가 있는 컴포넌트를 하나 만들고, 스크롤바를 아래로 내리는 작업을 부모 컴포넌트에서 해볼 것
import React, { Component } from "react";

// 스크롤바를 맨 아래로 내리려면 scrollHeight에서 clientHeight 높이를 빼면 됨
class Scroll extends Component {
  scrollBottom = () => {
    // 다음 코드에서 비구조화 할당 문법이 사용됨
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "400px",
      width: "400px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "700px",
      background: "linear-gradient(white, purple)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default Scroll;
