// 먼저 상단에서 useState를 import 해줌
import React, { useState } from "react";

const Counter = () => {
  // const [number, setNumber] = useState(0); 작성
  // 카운터의 기본값을 0으로 설정한다는 의미
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>

      <button onClick={() => setNumber(number - 1)}>-1</button>
      <button onClick={() => setNumber(number + 1)}>+1</button>
    </div>
  );
};

export default Counter;
