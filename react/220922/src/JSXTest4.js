import React from "react";

function ReactTest4() {
  const a = 5;
  const b = 3;
  return (
    <div>
      <h1>Test4</h1>
      {/* 조건? 참일때 실행문: 거짓일때 실행문  */}
      {a > b && <h2>a가 b보다 큽니다.</h2>}
    </div>
  );
}

export default ReactTest4;
