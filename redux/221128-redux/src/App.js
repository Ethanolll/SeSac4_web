import './App.css';
import { useState } from 'react';
import {createStore} from "redux";
import {Provider} from 'react-redux';

function reducer(state, action){
  return {number : 1};
}
const store = createStore(reducer);
function App() {
  // const [number, setNumber] = useState(0);
  return (
    <Provider store={store}>
      <div id="app">
        <h1>number : </h1>
        <Box1/>
      </div>
    </Provider>
  );
}

const Box1 = () =>{
  console.log('Box1');
  return (
    <div>
      <h2>Box1 컴포넌트 number : </h2>
      <Box2/>
    </div>
  )
}

const Box2 = (props) =>{
  console.log('Box2');
  return (
    <div>
      <h3>Box2 컴포넌트 number : {props.number}</h3>
      <Box3 number={props.number} onIncrease={props.onIncrease} onDecrease={props.onDecrease} />
    </div>
  )
}
const Box3 = (props) =>{
  console.log('Box3');
  return (
    <div>
      <h4>Box3 컴포넌트 number : {props.number}</h4>
      <input type="button" value="+" onClick={()=>{props.onIncrease()}} />
      <input type="button" value="-" onClick={()=>{props.onDecrease()}} />
    </div>
  )
}

export default App;