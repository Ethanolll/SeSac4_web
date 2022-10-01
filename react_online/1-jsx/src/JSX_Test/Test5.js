// 1. App.css 에 test라는 클래스를 작성하고 배경색상, 글자색, 글자크기, 마진을 다음 사진처럼 나오도록 설정해주세요.
// 2. input이라는 클래스를 작성하고 마진과 정렬 속성을 설정해주세요.
// 3. App.js 에서 div 태그에 test 클래스를 적용해주세요.
// 4. title 이라는 변수를 만들고 원하는 제목을 넣어주세요.
// 5. input 태그를 이용하여 다음 결과물처럼 만들어주세요.
// 6. input 태그가 있는 곳에 input 클래스를 적용해주세요.

import "./Test5.css";

function Test5() {
  const title = "Hello World";

  return (
    <>
      <div className="test">{title}</div>

      <div className="input">
        아이디 : <input></input>
        <br />
        <br />
        비밀번호 : <input></input>
      </div>
    </>
  );
}

export default Test5;
