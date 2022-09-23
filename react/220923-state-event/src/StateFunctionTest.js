import React, {useState} from "react";

function StateFunctionTest(){
    const [msg, setMsg] = useState(0);

    // function changeMsg(){
    //     setMsg(0)
    //     // setState({msg: "메세지 "})
    // }

    const increase = () => {
        setMsg(msg+2);
    }

    const decrease = () => {
        setMsg(msg-1);
    }


    return (
        <div>
            <div><h1>문제2</h1></div>
            <p>{msg}</p>
            <button onClick={increase}>+2</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}
export default StateFunctionTest;