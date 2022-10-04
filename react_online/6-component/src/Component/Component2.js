// 동적인 배열을 렌더링하는 것을 구현
// index 값을 key로 사용하면 리렌더링이 비효율적이라고 했는데 그럼 어떻게 고유값을 만들 수 있는지?

import React, { useState } from "react";

// Component1은 단순히 문자열로 이루어진 배열을 만들었지만, 이번엔 객체 형태로 이루어진 배열을 만듦
// 그리고 그 객체에는 문자열과 고유 id 값이 있음
const Sample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "청바지" },
    { id: 2, text: "패딩" },
    { id: 3, text: "반팔" },
    { id: 4, text: "운동화" },
  ]);

  // useState를 이용하여 세 가지 상태를 설정
  // 하나는 데이터 배열,
  // 다른 하나는 텍스트를 입력할 수 있는 input의 상태
  // 마지막 하나는 데이터 배열에서 새로운 항목을 추가할 때 사용할 고유 id를 위한 상태
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);

  // onClick 함수에서는 배열의 내장 함수인 concat을 사용하여 새로운 항목을 추가한 배열을 만들고,
  // setNames를 통해 상태를 업데이트 해줌
  // 새로운 항목을 추가할 때 객체의 id 값은 nextId를 사용하도록 하고,
  // 클릭될 때마다 1씩 증가하도록 코드를 작성
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  // filter 함수를 사용하여 해당 id를 없애도록 함
  // 그리고 setNames를 통해 상태를 업데이트 해줌
  // 마지막으로 <li> 태그에 onDoubleClick 이벤트를 등록하면 끝!
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  // map 함수를 사용할 때 key 값을 index 대신 name.id 값으로 지정해줌
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </div>
  );
};

export default Sample;
