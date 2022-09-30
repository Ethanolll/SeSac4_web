import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) { // action 값의 type이 뭔지
        case "INCREMENT":
            return {value: state.value + 1}; // 현재 상태는 초깃값
        case "DECREMENT":
            return {value: state.value -1};
        default:
            return state;
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    return (
        <div>
            <h1>{state.value}</h1>

            <button onClick={() => {dispatch({type: "DECREMENT"})}}>-1</button>
            <button onClick={() => {dispatch({type: "INCREMENT"})}}>+1</button>
        </div>
    )
}

export default Reducer; 