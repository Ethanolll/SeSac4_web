// ✨ 규칙 5️⃣ : 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안됨

// ❌ 오류 발생 코드 ❌
// function Rule5() {
//   const name = undefined;
//   return name;
// }

// 방법 1️⃣
// 어떤 값이 undefined일 수도 있다면,
// OR(||) 연산자를 사용하여 해당 값이 undefined일 떄 사용할 값을 지정할 수 있으므로
// 간단하게 오류를 방지할 수도 있음
function Rule5() {
  const name = undefined;
  return name || "값이 undefined입니다.";
}

// 방법 2️⃣
// JSX 내부에서 undefined를 렌더링하는 것은 괜찮!
// function Rule5() {
//   const name = undefined;
//   return <div>{name}</div>;
// }

// 방법 3️⃣
// name 값이 undefined일 때 보여주고 싶은 문구가 있을 때
// function Rule5() {
//   const name = undefined;
//   return <div>{name || "리액트"}</div>;
// }

export default Rule5;
