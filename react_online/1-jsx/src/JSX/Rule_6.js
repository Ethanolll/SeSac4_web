// ✨ 규칙 6️⃣
// 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어주어야 함
// 스타일 이름 중에서 background-color 처럼 - 문자가 포함되는 이름이 있는데
// 이런 이름은 - 문자를 없애고 카멜 표기법으로 작성해야 함
// 따라서 background-color => backgroundColor로 작성해야 함

// 방법 1️⃣
// function Rule6() {
//   const name = "리액트";
//   const style = {
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px",
//     fontWeight: "bold",
//     padding: 16,
//   };

//   return <div style={style}>{name}</div>;
// }

// 방법 2️⃣
function Rule6() {
  const name = "리액트";
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: 16,
      }}
    >
      {name}
    </div>
  );
}

export default Rule6;
