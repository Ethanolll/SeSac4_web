// 1. name이라는 변수에 본인의 이름을 넣어주세요.
// 2. my_style이라는 변수에 배경색상, 글자색상, 글자크기, 패딩 값을 지정해주세요.
// 배경색상은 파란색, 글자색상은 오렌지색, 글자크기는 40px, 패딩은 12로 해주시면 됩니다.
// 3. return 함수 내에서 div의 스타일로 my_style을 지정해주세요.
// 4. div 태그에는 위에서 지정한 name을 출력해주세요.

import React, { Component } from "react";

class Test extends Component {
  render() {
    const name = "야경";
    const my_style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: 12,
    };

    return <div style={my_style}>{name}</div>;
  }
}

export default Test;
