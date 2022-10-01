// ✨ 규칙 2️⃣ : JSX 안에서는 자바스크립트 표현식을 쓸 수 있음
// 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 {}로 감싸면 됨

function Rule2() {
  const name = "리액트";
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default Rule2;
