import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import StateClassTest from './StateClassTest';
import StateFunctionTest from './StateFunctionTest';
import Event from './Event';
import EventClass from './EventClass';
import EventTest1 from './EventTest1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateClass name="Sesac" />
    <StateFunction/>
    <StateClassTest/>
    <StateFunctionTest/>
    <Event/>
    <EventClass/>
    <EventTest1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
