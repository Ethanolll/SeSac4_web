// input이 많다면
// useState를 통해 사용하는 상태에 문자열이 아닌 객체를 넣을 수 있음
import React, { useState } from "react";

const Event = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  //   여기서 ...form은 기존의 form 내용을 복사한다는 뜻
  //   그리고 [e.target.name]: e.target.value를 써서 원하는 값을 덮어씌우는 것
  //   onChange 함수가 하나가 되었으니 onChange에 일일이 onChangeUsername, onChangeMessage 이렇게 써주지 않아도 됨
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>리액트의 이벤트!!</h1>

      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={username}
        onChange={onChange}
      />

      <input
        type="text"
        name="message"
        placeholder="이곳에 입력해보세요."
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <button onClick={onClick}>클릭</button>
    </div>
  );
};

export default Event;
