// ✨ 규칙 4️⃣ : 특정 조건을 만족할 때는 내용을 보여주고, 만족하지 않을 때는 아예 아무것도 렌더링하지 않아야 하는 상황

// 방법 1️⃣
// function Rule4() {
//   const name = "뤼액트";
//   return <div>{name === "리액트" ? <h1>리액트입니다.</h1> : null}</div>;
// }

// 방법 2️⃣ : 방법 1️⃣ 보다 짧은 코드
// && 연산자로 조건부 렌더링을 할 수 있는 이유 : false를 렌더링 할 때는 null과 마찬가지로 아무것도 나타내지 않기 때문
function Rule4() {
  const name = "뤼액트";
  return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;
}

export default Rule4;
