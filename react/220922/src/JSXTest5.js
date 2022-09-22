import React from "react";
import "./JSXTest5.css";

function ReactTest5() {
  // 답
  // const title = "Hello World";

  return (
    <div>
      <h1>Test5</h1>
      <div className="test">{<h1>Hello World</h1>}</div>
      {/* <div className="test">
        <h1>{title}</h1>
      </div> */}
      <div>
        <p className="input">
          아이디 : <input />
        </p>
        <p className="input">
          비밀번호 : <input />
        </p>
      </div>
      {/* <div className="input">
        아이디 : <input></input>
        <br></br>
        비밀번호 : <input></input>
      </div> */}
    </div>
  );
}

export default ReactTest5;
