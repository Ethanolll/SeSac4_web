// ✨ 규칙 9️⃣
// JSX 안에서 주석을 작성하는 방법
import "./Rule_7.css";

// ❌ 잘못된 주석 처리 ❌
function Rule9() {
  const name = "리액트";
  return (
    <>
      {/* 주석은 이렇게 시작합니다!! */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수도 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
      <input />
    </>
  );
}

export default Rule9;
