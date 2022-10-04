// 함수형 컴포넌트에서 state를 사용하는 방법
import React, { useState } from "react";

const Say = () => {
  // useState 함수의 인자에는 상태의 초깃값을 넣어줌
  // 함수를 호출하면 배열이 반환되는데, 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꿔주는 함수
  // 이러한 함수를 Setter 함수라고 부름
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
