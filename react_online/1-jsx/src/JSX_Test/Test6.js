// 1. App.css 에 red, orange, yellow, green, blue, navy, purple 이라는 클래스를 만들어주세요.
// 2. 각 클래스에 이름에 맞는 배경색상을 지정하고 가로와 세로 길이를 지정해주세요.
// 3. 다음 사진과 같이 무지개색을 띄도록 div를 나열해주세요.

import "./Test6.css";

function Test6() {
  return (
    <>
      <div className="all">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    </>
  );
}

export default Test6;
