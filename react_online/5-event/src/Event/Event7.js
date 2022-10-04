// 함수형 컴포넌트로 작성
// e.target.name을 활용하지 않고 onChange 함수를 따로 두 개 만들어줌
// input이 두 개 밖에 없다면 이런 코드도 괜찮음!
import React, { useState } from "react";

const Event = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
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
        onChange={onChangeUsername}
      />

      <input
        type="text"
        name="message"
        placeholder="이곳에 입력해보세요."
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />

      <button onClick={onClick}>클릭</button>
    </div>
  );
};

export default Event;
