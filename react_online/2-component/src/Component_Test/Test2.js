// 1. style이라는 변수에 글자색상, 글자크기, 마진 탑 값을 지정해주세요.
// 글자색상은 오렌지색, 글자크기는 40px, 마진 탑은 20으로 해주시면 됩니다.
// 2. return 함수 내에서 div의 스타일로 style을 지정해주세요.
// 3. 스타일이 style로 지정된 div 태그 안에 h2태그를 이용하여 "안녕하세요" 문구를 출력하게 해주세요.
// 4. 스타일이 style로 지정된 div 태그 안에 img 태그를 이용하여 원하는 이미지를 넣어주세요.

// //이미지 삽입 방법
// 1) 원하는 이미지를 src 폴더에 넣어줍니다.
// 2) 이미지를 import 합니다.
// 예를 들어 import coding from "이미지 경로";
// 3) 이미지 태그를 작성합니다.
// 예를 들어 <img src={coding}>

import React, { Component } from "react";
import neon from "./야경.jpg";

class Test extends Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      marginTop: 20,
    };

    return (
      <div style={style}>
        <h2>안녕하세요</h2>

        <img src={neon} width="270" height="45" />
      </div>
    );
  }
}

export default Test;
