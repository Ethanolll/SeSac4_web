import {useState, useEffect} from "react";

const HooksEffect = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName(e.target.value);
    }
    const changeCnt = () => {
        setCnt(cnt + 1);
    }

    // 이 부분이 Hook

    // useEffect(() => {
    //     console.log("useEffect"); 
    //     console.log("name :", name);
    // }, [cnt]);
     
    // []은 빈 배열 useEffect 살행 X
    // [] 안에는 내가 검사하고 싶은 것만 보내는 것 
    // 빈배열을 보내면 렌더링할때만 실행하고 그 후엔 실행 X 

    // useEffext : Mount는 안되는데 Update할 때는 조건을 걸 수 있음
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.name != this.state.name) {
    //         // 실행
    //     }
    // }

    // 뒷처리 함수
    useEffect(() => {
        console.log("name1 :", name);
        return () => {
            console.log( "name2 :", name ); 
        }
    }, [name]);
    // 뒷정리 함수를 이용해서 업데이트 전에 입력한 것이 먼저 실행되고 
    // 업데이트 된 후 다음 것이 실행됨!

    return (
        <div>
            <div>
                <input value={name} onChange={changeName}/>
                <button onClick={changeCnt}>+1</button>
            </div>
            <h3>이름 : {name} </h3>
            <h4>횟수 : {cnt} </h4>
        </div>
    )
}

export default HooksEffect;