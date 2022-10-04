// 함수형 컴포넌트를 만들어주세요.
// 숫자의 초깃값은 0으로 설정해주세요.
// Increase라는 함수를 만들고 1씩 증가하는 역할을 하도록 해주세요.
// Decrease라는 함수를 만들고 2씩 감소하는 역할을 하도록 해주세요.

import React, { useState } from "react";

const State_ex = () => {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };
  const Decrease = () => {
    setNumber(number - 2);
  };
  return (
    <div>
      <h1>{number}</h1>

      <button onClick={Increase}>+1</button>

      <button onClick={Decrease}>-2</button>
    </div>
  );
};

export default State_ex;
