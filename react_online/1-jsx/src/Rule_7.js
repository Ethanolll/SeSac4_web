// ✨ 규칙 7️⃣
// JSX에서는 CSS 클래스를 사용할 때 class가 아닌 className으로 설정해줘야 함
import "./Rule_7.css";

function Rule7() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default Rule7;
