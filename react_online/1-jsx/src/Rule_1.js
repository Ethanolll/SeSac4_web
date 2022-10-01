// ✨ 규칙 1️⃣ : 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 함

// 방법 1️⃣
// function Rule1() {
//   return (
//     <div>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </div>
//   );
// }

// 방법 2️⃣
// function Rule1() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </Fragment>
//   );
// }

// 방법 3️⃣
function Rule1() {
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default Rule1;
