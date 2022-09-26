import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import ComponentTest from './ComponentTest';
import ReactTest1 from './ReactTest1';
// import Event_ex from './Event_ex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ComponentTest/>
    <ReactTest1/>
    {/* <Event_ex/> */}
  </React.StrictMode>
);