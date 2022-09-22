import React from "react";
import ReactDOM from "react-dom/client";
import JSXTest1 from "./JSXTest1";
import JSXTest2 from "./JSXTest2";
import JSXTest3 from "./JSXTest3";
import JSXTest4 from "./JSXTest4";
import JSXTest5 from "./JSXTest5";
import JSXTest6 from "./JSXTest6";
import ComponentTest1 from "./ComponentTest1";
import ComponentTest2 from "./ComponentTest2";
import PropsTest1 from "./PropsTest1";
import PropsTest2 from "./PropsTest2";
import PropsTest3 from "./PropsTest3";

// import ClassComponent from './ClassComponent';
// import App from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <JSXTest1 />
    <JSXTest2 />
    <JSXTest3 />
    <JSXTest4 />
    <JSXTest5 />
    <JSXTest6 />
    {/* <ComponentTest1 name="박자연" /> */}
    <ComponentTest1 />
    <ComponentTest2 />
    <PropsTest1 food="아귀찜" />
    <PropsTest2
      title="나의 하루는 4시 40분에 시작된다"
      author="김유진"
      price="13,500"
      type="자기계발서"
    />
    <PropsTest3
      text="App 컴포넌트에서 넘겨준 text props입니다."
      valid="콘솔 띄우기 성공!"
    />
    {/* <PropsTest3
      text="App 컴포넌트에서 넘겨준 text props입니다."
      valid={my_func}
    /> */}
    {/* <ClassComponent name= {1} location="문래">문자</ClassComponent> */}
    {/* <App /> */}
  </>
);

// 숫자를 적을 때는 { }로 감싸야 함
