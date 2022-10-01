// ✨ 규칙 8️⃣
// HTML 코드를 작성할 때 가끔 닫지 않은 상태로 코드를 작성하기도 함
// ex) <inpu></input>이라 작성하지 ❌, <input> 이라고만 작성해도 제대로 작동
// 코드를 닫지 않으면 오류 발생

import "./Rule_7.css";
// 오류 발생 코드
// function Rule8() {
//  const name = "리액트";
//  return (
//   <>
//    <div className="react">{name}</div>
//    <input>
//   </>
//  );
// }

// 방법 1️⃣
// function Rule8() {
//   const name = "리액트";
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input></input>
//     </>
//   );
// }

// 방법 2️⃣ : self-closing 태그
function Rule8() {
  const name = "리액트";
  return (
    <>
      <div className="react">{name}</div>
      <input />
    </>
  );
}

export default Rule8;
