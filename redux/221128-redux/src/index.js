import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux'; // createStore : store 생성 함수
import {Provider, useSelector, useDispatch} from 'react-redux'; 
// Provider : 리액트 App에 store를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
