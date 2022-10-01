// ✨ 규칙 3️⃣ : JSX 내부의 자바스크립트 표현식에서 If문을 사용할 수 없음.
// JSX 밖에서 If문을 사용하여 사전에 값을 설정하거나, {} 안에 조건부 연산자를 사용하면 됨
// 조건부 연산자의 또 다른 이름 : 삼항 연산자

// 조건 1️⃣ : name과 일치할 때
// function Rule3() {
//   const name = "리액트";
//   return (
//     <div>
//       {name === "리액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
//     </div>
//   );
// }

// 조건 2️⃣ : name과 일치하지 않을 떄
function Rule3() {
  const name = "리액트";
  return (
    <div>
      {name === "뤼액트" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </div>
  );
}

export default Rule3;
