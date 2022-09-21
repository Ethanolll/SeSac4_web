import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactTest1 from './ReactTest1';
import ReactTest2 from './ReactTest2';
import ReactTest3 from './ReactTest3';
import ReactTest4 from './ReactTest4';
import ReactTest5 from './ReactTest5';
// import ClassComponent from './ClassComponent';
// import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ReactTest1 />
    <ReactTest2 />
    <ReactTest3 />
    <ReactTest4 />
    <ReactTest5 />
    {/* <ClassComponent name= {1} location="문래">문자</ClassComponent> */}
    {/* <App /> */}
  </>
);

// 숫자를 적을 때는 { }로 감싸야 함