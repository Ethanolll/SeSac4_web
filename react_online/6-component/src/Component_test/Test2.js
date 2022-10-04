// 1. 두 번째 input에서 Enter를 눌렀을 때 아래에 정보가 추가되도록 해주세요.
// 2. 정보를 더블클릭했을 때 해당 정보가 삭제되도록 해주세요.
import React, { useState } from "react";

const Event_ex = () => {
  const [data, setData] = useState([
    { id: 1, user: "lemon", email: "lemon@naver.com" },
    { id: 2, user: "orange", email: "orange@naver.com" },
  ]);

  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nextId, setNextId] = useState(3);

  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  const eventClick = () => {
    const Nextdata = data.concat({
      id: nextId,
      user: inputUser,
      email: inputEmail,
    });

    setNextId(nextId + 1);
    setData(Nextdata);
    setInputUser("");
    setInputEmail("");
  };

  const KeyPress = (e) => {
    if (e.key === "Enter") {
      eventClick();
    }
  };

  const Remove = (id) => {
    const Nextdata = data.filter((data) => data.id !== id);
    setData(Nextdata);
  };

  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => Remove(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyPress={KeyPress}
      />
      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
};

export default Event_ex;
