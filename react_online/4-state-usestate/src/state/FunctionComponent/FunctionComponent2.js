// useState는 한 컴포넌트에서 여러번 사용해도 상관 ❌
import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>

      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>

      <button style={{ color: "orange" }} onClick={() => setColor("orange")}>
        주황색
      </button>
    </div>
  );
};

export default Say;
