import React from "react";
import Rule1 from "./Rule_1";
import Rule2 from "./Rule_2";
import Rule3 from "./Rule_3";
import Rule4 from "./Rule_4";
import Rule5 from "./Rule_5";
import Rule6 from "./Rule_6";
import Rule7 from "./Rule_7";
import Rule8 from "./Rule_8";
import Rule9 from "./Rule_9";

function JSX() {
  return (
    <div>
      <Rule1 />
      <hr />
      <Rule2 />
      <hr />
      <Rule3 />
      <hr />
      <Rule4 />
      <hr />
      <Rule5 />
      <hr />
      <Rule6 />
      <hr />
      <Rule7 />
      <hr />
      <Rule8 />
      <hr />
      <Rule9 />
    </div>
  );
}

// ✨ 규칙 6️⃣ : 리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객테 형태로 넣어주어야 함

export default JSX;
